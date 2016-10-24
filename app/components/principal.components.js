System.register(['angular2/core', 'angular2/common', './carousel/slide.component', './carousel/carousel.component'], function(exports_1, context_1) {
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
    var core_1, common_1, slide_component_1, carousel_component_1;
    var PrincipalPaginaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (slide_component_1_1) {
                slide_component_1 = slide_component_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            }],
        execute: function() {
            PrincipalPaginaComponent = (function () {
                function PrincipalPaginaComponent() {
                    //The time to show the next photo
                    this.NextPhotoInterval = 2000;
                    //Looping or not
                    this.noLoopSlides = true;
                    //Photos
                    this.slides = [];
                    this.addNewSlide();
                }
                PrincipalPaginaComponent.prototype.addNewSlide = function () {
                    this.slides.push({ image: '../assets/images/carrousel/fanart-1193-full.jpg' }, { image: '../assets/images/carrousel/screensaver-with-the-dragon-of-wow-cataclysm.jpg' }, { image: '../assets/images/carrousel/335570.jpg' }, { image: '../assets/images/carrousel/WoW-Cataclysm-Mazmorras-Raid.jpg' }, { image: '../assets/images/carrousel/wow-d.jpg' }, { image: '../assets/images/carrousel/RCQSO096AZA11290506717056.jpg' });
                };
                PrincipalPaginaComponent.prototype.removeLastSlide = function () {
                    this.slides.pop();
                };
                PrincipalPaginaComponent = __decorate([
                    core_1.Component({
                        selector: "principal-pagina",
                        templateUrl: "app/vista/principal.html",
                        directives: [slide_component_1.Slide, carousel_component_1.Carousel, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [])
                ], PrincipalPaginaComponent);
                return PrincipalPaginaComponent;
            }());
            exports_1("PrincipalPaginaComponent", PrincipalPaginaComponent);
        }
    }
});
//# sourceMappingURL=principal.components.js.map