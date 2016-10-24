import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {Usuario} from '../modelo/usuarios';
import {UsuariosService} from "../services/usuarios.service";



@Component({
	selector: "mostrar-usuarios",
	templateUrl:"app/vista/mostrar.html",
	providers: [UsuariosService],
	directives: [ROUTER_DIRECTIVES]
	})



export class MostrarComponent{
	
	public mostrarUsuarios:boolean;
	public usuario:Usuario;
	public usuarios;


	constructor(private _usuarioService: UsuariosService){
		this.mostrarUsuarios = false;
		this.usuarios = this._usuarioService.getUsuarios();
		this.usuario=this.usuarios[0];
	}

	onShowHide(value){
		this.mostrarUsuarios = value;
	}




	}