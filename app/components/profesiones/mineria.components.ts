import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component({
	selector: "mineria",
	templateUrl: "app/vista/profesiones/mineria.html",
	directives: [MineriaComponent, ROUTER_DIRECTIVES]
	})

//clase que no le pasamos nada

export class MineriaComponent{}