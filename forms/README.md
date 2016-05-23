
namespace Int
{
    public interface IAccessGroupTypeAppFrameworkContextWrapper
    {
        AccessGroupTypeId GetAccessGroupType();
    }
}
[TestClass]
	public class ReviewControllerTests : UnitTestsFor<ReviewController>
	{
		[TestInitialize]
		public void SetUp()
		{
			_controllerActionRetriever = new Mock<IRetrieveControllerAction>();
			Func<AccessGroupTypeId, IRetrieveControllerAction> resolver = accessGroup =>
			{
				_accessGroupIdUsedToRetrieveControllerAction = accessGroup;
				return _controllerActionRetriever.Object;
			};

			Register(resolver);
			InitObjectUnderTest();
		}

		[TestMethod]
		public void ShouldRedirectToOverridenControllerAndAction()
		{
			GivenUserIsPartOfAccessGroup(AccessGroupTypeId.PREMIER);
			GivenAControllerAction("SomeController", "SomeAction");
			WhenAnOrderIsSubmited();
			ThenARedirectOccursFor("SomeController", "SomeAction");
			ThenARedirectWasObtainedForUserInAccessGroup(AccessGroupTypeId.PREMIER);
		}

		[TestMethod]
		public void Should_redirect_to_review_page_if_coupon_cannot_be_redeemed()
		{
			// Arrange
			Guid guid = Guid.NewGuid();
			For<ICartIdProvider>()
				.Setup(c => c.ActiveCartId)
				.Returns(guid.ToString());


			For<ISwitchboard>()
				.Setup(s => s.Execute(It.IsAny<SubmitOrderCommand>()))
				.Throws(new PurchaseException(PurchaseAppEventIdConstants.FailedToRedeemCouponForSubmitOrder));

			var container = FunctionalTestBootstrapper.Configure();
			var current = container.BeginLifetimeScope("httpRequest").Resolve<IEnterpriseSettingsFactory>().GetCartAndCheckoutSettings();
			For<ISettingsResolver<Ecommerce.UI.Settings.CartAndCheckoutSettings.GeneralSettings>>()
					.SetupGet(e => e.Current).Returns(current.GeneralSettings);
			For<ISettingsResolver<Ecommerce.UI.Settings.CartAndCheckoutSettings.GeneralSettings>>()
				.SetupGet(e => e.Current)
				.Returns(current.GeneralSettings);

			// Act
			ActionResult result = ObjectUnderTest.SubmitOrder();

			// Arrange
			result.ShouldBeType<RedirectToRouteResult>();
			RedirectToRouteResult redirectToRouteResult = result as RedirectToRouteResult;
			redirectToRouteResult.RouteValues["Action"].ShouldEqual("Index");
		}

		[TestMethod]
		public void Should_redirect_to_thankyou_page_if_no_active_cartId_exist()
		{
			// Arrange
			Guid guid = Guid.NewGuid();
			For<ICartIdProvider>()
				.Setup(c => c.CartIdInAnyState)
				.Returns(guid.ToString());
			For<IWorkflowNavigator>()
				.Setup(w => w.GetNextState(WorkflowState.Review, WorkflowAction.SubmitOrder))
				.Returns(WorkflowState.ThankYou);

			// Act
			ActionResult result = ObjectUnderTest.SubmitOrder();

			// Assert
			result.ShouldBeType<RedirectToRouteResult>();
			RedirectToRouteResult redirectToRouteResult = result as RedirectToRouteResult;
			redirectToRouteResult.RouteValues["Controller"].ShouldEqual("ThankYou");
			redirectToRouteResult.RouteValues["Action"].ShouldEqual("Index");
		}

		private void ThenARedirectWasObtainedForUserInAccessGroup(AccessGroupTypeId accessGroup)
		{
			_accessGroupIdUsedToRetrieveControllerAction.ShouldEqual(accessGroup);
		}

		private void GivenUserIsPartOfAccessGroup(AccessGroupTypeId accessGroup)
		{
			For<IAccessGroupTypeAppFrameworkContextWrapper>().Setup(x => x.GetAccessGroupType()).Returns(accessGroup);
		}

		private void GivenAControllerAction(string controllerName, string actionName)
		{
			_controllerActionRetriever.Setup(x => x.GetControllerAction()).Returns(new ControllerAction { Action = actionName, Controller = controllerName });
		}

		private void WhenAnOrderIsSubmited()
		{
			_returnedActionResult = ObjectUnderTest.SubmitOrder();
		}

		private void ThenARedirectOccursFor(string controllerName, string actionName)
		{
			_returnedActionResult.ShouldBeType<RedirectToRouteResult>();
			var redirectToRouteResult = (RedirectToRouteResult)_returnedActionResult;
			redirectToRouteResult.RouteValues["Action"].ShouldEqual(actionName);
			redirectToRouteResult.RouteValues["Controller"].ShouldEqual(controllerName);
		}

		private AccessGroupTypeId _accessGroupIdUsedToRetrieveControllerAction;
		private ActionResult _returnedActionResult;
		private Mock<IRetrieveControllerAction> _controllerActionRetriever;
	}
