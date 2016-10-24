System.register(['angular2/core', "./components/principal.components", "./components/footer.components", "./components/apply.components", "./components/eventos.components", "./components/farmeoteca.components", "./components/usuarios.components", "./components/mostrar.components", 'angular2/common', './components/carousel/slide.component', './components/carousel/carousel.component', "./components/clases/warrior.components", "./components/clases/paladin.components", "./components/clases/dk.components", "./components/profesiones/herboristeria.components", "./components/profesiones/mineria.components", "./components/profesiones/arqueologia.components", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, principal_components_1, footer_components_1, apply_components_1, eventos_components_1, farmeoteca_components_1, usuarios_components_1, mostrar_components_1, common_1, slide_component_1, carousel_component_1, warrior_components_1, paladin_components_1, dk_components_1, herboristeria_components_1, mineria_components_1, arqueologia_components_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (principal_components_1_1) {
                principal_components_1 = principal_components_1_1;
            },
            function (footer_components_1_1) {
                footer_components_1 = footer_components_1_1;
            },
            function (apply_components_1_1) {
                apply_components_1 = apply_components_1_1;
            },
            function (eventos_components_1_1) {
                eventos_components_1 = eventos_components_1_1;
            },
            function (farmeoteca_components_1_1) {
                farmeoteca_components_1 = farmeoteca_components_1_1;
            },
            function (usuarios_components_1_1) {
                usuarios_components_1 = usuarios_components_1_1;
            },
            function (mostrar_components_1_1) {
                mostrar_components_1 = mostrar_components_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (slide_component_1_1) {
                slide_component_1 = slide_component_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            },
            function (warrior_components_1_1) {
                warrior_components_1 = warrior_components_1_1;
            },
            function (paladin_components_1_1) {
                paladin_components_1 = paladin_components_1_1;
            },
            function (dk_components_1_1) {
                dk_components_1 = dk_components_1_1;
            },
            function (herboristeria_components_1_1) {
                herboristeria_components_1 = herboristeria_components_1_1;
            },
            function (mineria_components_1_1) {
                mineria_components_1 = mineria_components_1_1;
            },
            function (arqueologia_components_1_1) {
                arqueologia_components_1 = arqueologia_components_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        // template: '<h1>Hola mundo con Angular 2 !! </h1>' ((((antiguo, modificamos con el de abajo para el otro ejercicio))))
                        templateUrl: "app/vista/inicio.html",
                        directives: [slide_component_1.Slide, carousel_component_1.Carousel, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, principal_components_1.PrincipalPaginaComponent, footer_components_1.FooterComponent, apply_components_1.AplysComponent, farmeoteca_components_1.FarmeotecaComponent, mostrar_components_1.MostrarComponent, usuarios_components_1.UsuariosComponent, eventos_components_1.EventosComponent, warrior_components_1.WarriorComponent, paladin_components_1.PaladinComponent, dk_components_1.DkComponent, herboristeria_components_1.HerboristeriaComponent, mineria_components_1.MineriaComponent, arqueologia_components_1.ArqueologiaComponent, router_1.ROUTER_DIRECTIVES],
                    }),
                    router_1.RouteConfig([
                        { path: "/principal", name: "Principal", component: principal_components_1.PrincipalPaginaComponent, useAsDefault: true },
                        { path: "/apply", name: "Apply", component: apply_components_1.AplysComponent },
                        { path: "/farmeoteca", name: "Farmeoteca", component: farmeoteca_components_1.FarmeotecaComponent },
                        { path: "/guerrero", name: "Warrior", component: warrior_components_1.WarriorComponent },
                        { path: "/paladin", name: "Paladin", component: paladin_components_1.PaladinComponent },
                        { path: "/dk", name: "Dk", component: dk_components_1.DkComponent },
                        { path: "/herboristeria", name: "Herboristeria", component: herboristeria_components_1.HerboristeriaComponent },
                        { path: "/mineria", name: "Mineria", component: mineria_components_1.MineriaComponent },
                        { path: "/arqueologia", name: "Arqueologia", component: arqueologia_components_1.ArqueologiaComponent },
                        { path: "/eventos", name: "Eventos", component: eventos_components_1.EventosComponent },
                        { path: "/usuarios", name: "Usuarios", component: usuarios_components_1.UsuariosComponent },
                        { path: "/mostrar", name: "Mostrar", component: mostrar_components_1.MostrarComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map