System.register(['angular2/core', "../modelo/usuarios", "angular2/router", "../services/usuarios.service"], function(exports_1, context_1) {
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
    var core_1, usuarios_1, router_1, usuarios_service_1;
    var UsuariosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (usuarios_1_1) {
                usuarios_1 = usuarios_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (usuarios_service_1_1) {
                usuarios_service_1 = usuarios_service_1_1;
            }],
        execute: function() {
            UsuariosComponent = (function () {
                function UsuariosComponent(_usuarioService, _router, _routeParams) {
                    this._usuarioService = _usuarioService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.NombreUsuario = "";
                }
                UsuariosComponent.prototype.onSubmit = function () {
                    //let perro: Perro = new Perro(1, nombreperro, razaperro, edadperro, duenioperro, sintomasperro);
                    this._usuarioService.insertUsuario(this.nuevoUsuario);
                    this._router.navigate(["Mostrar"]);
                };
                UsuariosComponent.prototype.ngOnInit = function () {
                    this.NombreUsuario = this._routeParams.get("personajeusuario");
                    this.nuevoUsuario = new usuarios_1.Usuario(0, this._routeParams.get("personajeusuario"), this._routeParams.get("claseusuario"), this._routeParams.get("ramasusuario"), this._routeParams.get("profesionesusuario"), this._routeParams.get("altersusuario"));
                };
                UsuariosComponent = __decorate([
                    core_1.Component({
                        selector: "usuarios",
                        templateUrl: "app/vista/usuarios.html",
                        providers: [usuarios_service_1.UsuariosService]
                    }), 
                    __metadata('design:paramtypes', [usuarios_service_1.UsuariosService, router_1.Router, router_1.RouteParams])
                ], UsuariosComponent);
                return UsuariosComponent;
            }());
            exports_1("UsuariosComponent", UsuariosComponent);
        }
    }
});
//# sourceMappingURL=usuarios.components.js.map