import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component({
	selector: "herboristeria",
	templateUrl: "app/vista/profesiones/herboristeria.html",
	directives: [HerboristeriaComponent, ROUTER_DIRECTIVES]
	})

//clase que no le pasamos nada

export class HerboristeriaComponent{}