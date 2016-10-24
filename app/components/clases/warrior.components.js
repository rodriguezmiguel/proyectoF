System.register(['angular2/core', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, router_1;
    var WarriorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            WarriorComponent = (function () {
                function WarriorComponent() {
                    this.mostrarArmasPVE = false;
                    this.mostrarArmasPVP = false;
                    this.mostrarFuria = false;
                    this.mostrarProte = false;
                    this.mostrarArmasPVE = false;
                    this.mostrarArmasPVP = false;
                    this.mostrarFuria = false;
                    this.mostrarProte = false;
                }
                WarriorComponent.prototype.onShowHide = function (value) {
                    this.mostrarArmasPVE = value;
                    this.mostrarArmasPVP = false;
                    this.mostrarFuria = false;
                    this.mostrarProte = false;
                };
                WarriorComponent.prototype.onShowHide11 = function (value) {
                    this.mostrarArmasPVE = false;
                    this.mostrarArmasPVP = value;
                    this.mostrarFuria = false;
                    this.mostrarProte = false;
                };
                WarriorComponent.prototype.onShowHide1 = function (value) {
                    this.mostrarArmasPVE = false;
                    this.mostrarArmasPVP = false;
                    this.mostrarFuria = value;
                    this.mostrarProte = false;
                };
                WarriorComponent.prototype.onShowHide2 = function (value) {
                    this.mostrarArmasPVE = false;
                    this.mostrarArmasPVP = false;
                    this.mostrarFuria = false;
                    this.mostrarProte = value;
                };
                WarriorComponent = __decorate([
                    core_1.Component({
                        selector: "warrior",
                        templateUrl: "app/vista/clases/warrior.html",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WarriorComponent);
                return WarriorComponent;
            }());
            exports_1("WarriorComponent", WarriorComponent);
        }
    }
});
//# sourceMappingURL=warrior.components.js.map