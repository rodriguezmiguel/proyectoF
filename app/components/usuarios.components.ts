import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Usuario} from "../modelo/usuarios";
import {Router, RouteParams} from "angular2/router";
import {UsuariosService} from "../services/usuarios.service";




@Component({
	selector: "usuarios",
	templateUrl:"app/vista/usuarios.html",
	providers: [UsuariosService]
	})

export class UsuariosComponent implements OnInit{
	public NombreUsuario = "";
	public nuevoUsuario: Usuario;
	
	constructor(private _usuarioService: UsuariosService, private _router: Router, private _routeParams: RouteParams){

	}



	onSubmit(){
		//let perro: Perro = new Perro(1, nombreperro, razaperro, edadperro, duenioperro, sintomasperro);
		this._usuarioService.insertUsuario(this.nuevoUsuario);
		this._router.navigate(["Mostrar"]);
	}

	ngOnInit():any{
		this.NombreUsuario = this._routeParams.get("personajeusuario");
		this.nuevoUsuario = new Usuario (
			0,
			this._routeParams.get("personajeusuario"),
			this._routeParams.get("claseusuario"),
			this._routeParams.get("ramasusuario"),
			this._routeParams.get("profesionesusuario"),
			this._routeParams.get("altersusuario"));

	}
	

	}