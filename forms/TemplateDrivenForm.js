System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TemplateDrivenForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TemplateDrivenForm = (function () {
                function TemplateDrivenForm() {
                    this.vm = {};
                }
                TemplateDrivenForm.prototype.onSubmitTemplateBased = function () {
                    alert("Template Driven Form submitted: vm = " + JSON.stringify(this.vm));
                    console.log(this.vm);
                };
                TemplateDrivenForm = __decorate([
                    core_1.Component({
                        selector: "template-driven-form",
                        template: "<section class=\"sample-app-content\">\n\n\t\t\t\t    <h1>Template-based Form Example:</h1>\n\n\t\t\t\t    <form #f=\"ngForm\" (ngSubmit)=\"onSubmitTemplateBased()\">\n\t\t\t\t        <p>\n\t\t\t\t            <label>First Name:</label>\n\t\t\t\t            <input type=\"text\" [(ngModel)]=\"vm.firstName\" required>\n\t\t\t\t        </p>\n\t\t\t\t        <p>\n\t\t\t\t            <label>Password:</label>\n\t\t\t\t            <input type=\"password\" [(ngModel)]=\"vm.password\" required>\n\t\t\t\t        </p>\n\t\t\t\t        <p>\n\t\t\t\t            <button type=\"submit\" [disabled]=\"!f.valid\">Submit</button>\n\t\t\t\t        </p>\n\t\t\t\t    </form>\n\n\t\t\t\t</section>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateDrivenForm);
                return TemplateDrivenForm;
            })();
            exports_1("TemplateDrivenForm", TemplateDrivenForm);
        }
    }
});
//# sourceMappingURL=TemplateDrivenForm.js.map