import {Component, OnInit, OnDestroy, Input, HostBinding } from 'angular2/core';

import {Carousel, Direction} from  './carousel.component';

@Component({
    selector: 'slide',
    templateUrl: "app/vista/carousel/slide.html",
})
export class Slide implements OnInit, OnDestroy {
    @Input() public index:number;
    @Input() public direction:Direction;

    @HostBinding('class.active')
    @Input() public active:boolean;

    @HostBinding('class.item')
    @HostBinding('class.carousel-item')
    private addClass:boolean = true;

    constructor(private carousel:Carousel) {
    }

    public ngOnInit() {
        this.carousel.addSlide(this);
    }

    public ngOnDestroy() {
        this.carousel.removeSlide(this);
    }
}
