System.register(['angular2/core', 'angular2/platform/browser', './ModelDrivenForm.js', './TemplateDrivenForm.js', 'rxjs/Rx'], function(exports_1) {
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
    var core_1, browser_1, ModelDrivenForm_js_1, TemplateDrivenForm_js_1;
    var Hello;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (ModelDrivenForm_js_1_1) {
                ModelDrivenForm_js_1 = ModelDrivenForm_js_1_1;
            },
            function (TemplateDrivenForm_js_1_1) {
                TemplateDrivenForm_js_1 = TemplateDrivenForm_js_1_1;
            },
            function (_1) {}],
        execute: function() {
            Hello = (function () {
                function Hello() {
                }
                Hello = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "<div>\n\n\t\t    <template-driven-form></template-driven-form>\n\n    \t\t<model-driven-form></model-driven-form>\n\t\t\t\n\t\t\t</div>",
                        directives: [ModelDrivenForm_js_1.ModelDrivenForm, TemplateDrivenForm_js_1.TemplateDrivenForm]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Hello);
                return Hello;
            })();
            exports_1("Hello", Hello);
            browser_1.bootstrap(Hello);
        }
    }
});
//# sourceMappingURL=form-examples.js.map