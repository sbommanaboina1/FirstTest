System.register(['angular2/core', './tab'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tab_1;
    var Tabs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tab_1_1) {
                tab_1 = tab_1_1;
            }],
        execute: function() {
            Tabs = (function () {
                function Tabs() {
                }
                // contentChildren are set
                Tabs.prototype.ngAfterContentInit = function () {
                    // get all active tabs
                    var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
                    // if there is no active tab set, activate the first
                    if (activeTabs.length === 0) {
                        this.selectTab(this.tabs.first);
                    }
                };
                Tabs.prototype.selectTab = function (tab) {
                    // deactivate all tabs
                    this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
                    // activate the tab the user has clicked on.
                    tab.active = true;
                };
                __decorate([
                    core_1.ContentChildren(tab_1.Tab), 
                    __metadata('design:type', core_1.QueryList)
                ], Tabs.prototype, "tabs", void 0);
                Tabs = __decorate([
                    core_1.Component({
                        selector: 'tabs',
                        template: "\n  <div class=\"tabs-left\">\n    <ul class=\"nav nav-tabs\">\n      <li *ngFor=\"#tab of tabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\" >\n        <a href=\"#\">{{tab.title}}</a>\n      </li>\n    </ul>\n    </div>\n    <ng-content></ng-content>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tabs);
                return Tabs;
            }());
            exports_1("Tabs", Tabs);
        }
    }
});
//# sourceMappingURL=tabs.js.map