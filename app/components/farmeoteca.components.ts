import {Component} from 'angular2/core';
import {Objeto} from "../modelo/farm";
import {Router} from "angular2/router";




@Component({
	selector: "farmeoteca",
	templateUrl:"app/vista/farmeoteca.html",
	})

export class FarmeotecaComponent{

	
	public Objeto;
	public usuarios;
	public nombreobjeto:string;

	public MostrarObsidium:boolean;
	public MostrarElementium:boolean;
	public MostrarCueroSalvaje:boolean;
	public MostrarColatigo:boolean;



	
	constructor(private _router: Router){

	this.MostrarElementium = false;
	this.MostrarObsidium = false;
	this.MostrarCueroSalvaje = false;
	this.MostrarColatigo = false;

		this.Objeto=[
			new Objeto(1,"","","","")
		];
	}

	

	onSubmit(){

		if (this.Objeto.nombreobjeto == "obsidium"){
				this.MostrarObsidium = true;
				this.MostrarElementium = false;
				this.MostrarCueroSalvaje = false;
				this.MostrarColatigo = false;
			}
			if(this.Objeto.nombreobjeto == "elementium"){
				this.MostrarObsidium = false;
				this.MostrarElementium = true;
				this.MostrarCueroSalvaje = false;
				this.MostrarColatigo = false;
			}
			if(this.Objeto.nombreobjeto == "cuero salvaje"){
				this.MostrarObsidium = false;
				this.MostrarElementium = false;
				this.MostrarCueroSalvaje = true;
				this.MostrarColatigo = false;
			}
			if(this.Objeto.nombreobjeto == "colatigo"){
				this.MostrarElementium = false;
				this.MostrarObsidium = false;
				this.MostrarCueroSalvaje = false;
				this.MostrarColatigo = true;
			}


		}

		
	}

	

	