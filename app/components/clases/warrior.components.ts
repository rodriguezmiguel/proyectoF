import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component({
	selector: "warrior",
	templateUrl: "app/vista/clases/warrior.html",
	directives: [ROUTER_DIRECTIVES]
	})

//clase que no le pasamos nada

export class WarriorComponent{


	public mostrarArmasPVE = false;
	public mostrarArmasPVP = false;
	public mostrarFuria = false;
	public mostrarProte = false;



	constructor(){
		this.mostrarArmasPVE = false;
		this.mostrarArmasPVP = false;
		this.mostrarFuria = false;
		this.mostrarProte = false;

	}

	onShowHide(value){
		this.mostrarArmasPVE= value;
		this.mostrarArmasPVP = false;
		this.mostrarFuria = false;
		this.mostrarProte = false;
	}

	onShowHide11(value){
		this.mostrarArmasPVE= false;
		this.mostrarArmasPVP = value;
		this.mostrarFuria = false;
		this.mostrarProte = false;
	}


	onShowHide1(value){
		this.mostrarArmasPVE=false;
		this.mostrarArmasPVP = false;
		this.mostrarFuria = value;
		this.mostrarProte = false;
	}

	onShowHide2(value){

		this.mostrarArmasPVE=false;
		this.mostrarArmasPVP = false;
		this.mostrarFuria = false;
		this.mostrarProte = value;
	}
}