System.register(['angular2/core', "../modelo/farm", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, farm_1, router_1;
    var FarmeotecaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (farm_1_1) {
                farm_1 = farm_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            FarmeotecaComponent = (function () {
                function FarmeotecaComponent(_router) {
                    this._router = _router;
                    this.MostrarElementium = false;
                    this.MostrarObsidium = false;
                    this.MostrarCueroSalvaje = false;
                    this.MostrarColatigo = false;
                    this.Objeto = [
                        new farm_1.Objeto(1, "", "", "", "")
                    ];
                }
                FarmeotecaComponent.prototype.onSubmit = function () {
                    if (this.Objeto.nombreobjeto == "obsidium") {
                        this.MostrarObsidium = true;
                        this.MostrarElementium = false;
                        this.MostrarCueroSalvaje = false;
                        this.MostrarColatigo = false;
                    }
                    if (this.Objeto.nombreobjeto == "elementium") {
                        this.MostrarObsidium = false;
                        this.MostrarElementium = true;
                        this.MostrarCueroSalvaje = false;
                        this.MostrarColatigo = false;
                    }
                    if (this.Objeto.nombreobjeto == "cuero salvaje") {
                        this.MostrarObsidium = false;
                        this.MostrarElementium = false;
                        this.MostrarCueroSalvaje = true;
                        this.MostrarColatigo = false;
                    }
                    if (this.Objeto.nombreobjeto == "colatigo") {
                        this.MostrarElementium = false;
                        this.MostrarObsidium = false;
                        this.MostrarCueroSalvaje = false;
                        this.MostrarColatigo = true;
                    }
                };
                FarmeotecaComponent = __decorate([
                    core_1.Component({
                        selector: "farmeoteca",
                        templateUrl: "app/vista/farmeoteca.html",
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], FarmeotecaComponent);
                return FarmeotecaComponent;
            }());
            exports_1("FarmeotecaComponent", FarmeotecaComponent);
        }
    }
});
//# sourceMappingURL=farmeoteca.components.js.map