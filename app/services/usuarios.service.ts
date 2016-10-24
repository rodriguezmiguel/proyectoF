import {Injectable} from 'angular2/core';
import {USUARIOS} from './mock.usuarios';
import {Usuario} from '../modelo/usuarios';

@Injectable()

export class UsuariosService{
	getUsuarios(){
		return USUARIOS;
	}
 insertUsuario(usuario: Usuario){
	Promise.resolve(USUARIOS).then((usuarios: Usuario[]) => usuarios.push(usuario));
	}
}