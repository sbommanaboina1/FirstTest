System.register(['angular2/core', 'angular2/common'], function(exports_1) {
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
    var core_1, common_1;
    var ModelDrivenForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ModelDrivenForm = (function () {
                function ModelDrivenForm(fb) {
                    var _this = this;
                    this.firstName = new common_1.Control("", common_1.Validators.required);
                    this.form = fb.group({
                        "firstName": this.firstName,
                        "password": ["", common_1.Validators.required]
                    });
                    this.form.valueChanges
                        .map(function (value) {
                        value.firstName = value.firstName.toUpperCase();
                        return value;
                    })
                        .filter(function (value) { return _this.form.valid; })
                        .subscribe(function (value) {
                        alert("Model Driven Form valid value: vm = " + JSON.stringify(value));
                    });
                    this.form.controls.firstName.valueChanges.subscribe(function (value) {
                        console.log('first name changed = ' + value);
                    });
                }
                ModelDrivenForm.prototype.onSubmit = function () {
                    console.log("model-based form submitted");
                    console.log(this.form);
                };
                ModelDrivenForm = __decorate([
                    core_1.Component({
                        selector: "model-driven-form",
                        template: "<section class=\"sample-app-content\">\n\n                <h1>Model-based Form Example:</h1>\n\n                <form [ngFormModel]=\"form\" (ngSubmit)=\"onSubmit()\">\n                    <p>\n                        <label>First Name:</label>\n                        <input type=\"text\" ngControl=\"firstName\">\n                    </p>\n                    <p>\n                        <label>Password:</label>\n                        <input type=\"password\" ngControl=\"password\">\n                    </p>\n                    <p>\n                        <button type=\"submit\" [disabled]=\"!form.valid\">Submit</button>\n                    </p>\n                </form>\n\n            </section>"
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ModelDrivenForm);
                return ModelDrivenForm;
            })();
            exports_1("ModelDrivenForm", ModelDrivenForm);
        }
    }
});
//# sourceMappingURL=ModelDrivenForm.js.map