<div ng- controller="TabsDemoCtrl" >

    <form name="campaignForm" class="form-horizontal" novalidate >
        <tabset>
        <tab heading="first" >
            <div ng- form="emailForm" >
                <input type="email" name= "emailFrom" class="input-xsmall" placeholder= "From email address" ng- model="campaign.info.emailFrom" required />
                    <span ng- show="emailForm.emailFrom.$dirty && emailForm.emailFrom.$error.required" class="help-inline" >
                        Required
                        < /span>
                        < /div>
                        < /tab>

                        < tab heading= "second" >
                            <div ng- form="subjectForm" >
                                <input type="text" name= "emailSubject" class="input-xxlarge" ng- model="campaign.info.emailSubject" placeholder= "Please enter email subject" required/>
                                    <span ng- show="subjectForm.emailSubject.$dirty && subjectForm.emailSubject.$error.required" class="help-inline" >
                                        Required
                                        < /span>
                                        < /div>
                                        < /tab>
                                        < /tabset>
                                        < /form>

                                        < /div>