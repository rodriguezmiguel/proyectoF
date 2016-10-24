import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Slide} from './carousel/slide.component';
import {Carousel} from './carousel/carousel.component';



@Component({
	selector: "principal-pagina",
	templateUrl:"app/vista/principal.html",
	directives: [Slide, Carousel, CORE_DIRECTIVES, FORM_DIRECTIVES],
	})

export class PrincipalPaginaComponent{

	    //The time to show the next photo
    private NextPhotoInterval:number = 2000;
    //Looping or not
    private noLoopSlides:boolean = true;
    //Photos
    private slides:Array<any> = [];

    constructor() {
            this.addNewSlide();
    }

    private addNewSlide() {
         this.slides.push(
            {image:'../assets/images/carrousel/fanart-1193-full.jpg'},
            {image:'../assets/images/carrousel/screensaver-with-the-dragon-of-wow-cataclysm.jpg'},
            {image:'../assets/images/carrousel/335570.jpg'},
            {image:'../assets/images/carrousel/WoW-Cataclysm-Mazmorras-Raid.jpg'},
            {image:'../assets/images/carrousel/wow-d.jpg'},
            {image:'../assets/images/carrousel/RCQSO096AZA11290506717056.jpg'}
        );
    }

    private removeLastSlide() {
        this.slides.pop();
    }

}
