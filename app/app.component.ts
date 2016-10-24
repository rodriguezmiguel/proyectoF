// Importar el núcleo de Angular
import {Component} from 'angular2/core';

//importamos el modelo de datos (la carpeta que tenemos en la carpeta modelo)

import {PrincipalPaginaComponent} from "./components/principal.components";
import {FooterComponent} from "./components/footer.components";
import {AplysComponent} from "./components/apply.components";
import {EventosComponent} from "./components/eventos.components";
import {FarmeotecaComponent} from "./components/farmeoteca.components";
import {UsuariosComponent} from "./components/usuarios.components";
import {MostrarComponent} from "./components/mostrar.components";

import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Slide} from './components/carousel/slide.component';
import {Carousel} from './components/carousel/carousel.component';

import {WarriorComponent} from "./components/clases/warrior.components";
import {PaladinComponent} from "./components/clases/paladin.components";
import {DkComponent} from "./components/clases/dk.components";

import {HerboristeriaComponent} from "./components/profesiones/herboristeria.components";
import {MineriaComponent} from "./components/profesiones/mineria.components";

import {ArqueologiaComponent} from "./components/profesiones/arqueologia.components";


import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";




// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    // template: '<h1>Hola mundo con Angular 2 !! </h1>' ((((antiguo, modificamos con el de abajo para el otro ejercicio))))
    templateUrl: "app/vista/inicio.html", //Lo cargamos desde un html
    directives:[Slide, Carousel, CORE_DIRECTIVES, FORM_DIRECTIVES, PrincipalPaginaComponent, FooterComponent, AplysComponent, FarmeotecaComponent, MostrarComponent, UsuariosComponent, EventosComponent, WarriorComponent, PaladinComponent, DkComponent, HerboristeriaComponent, MineriaComponent, ArqueologiaComponent, ROUTER_DIRECTIVES],
    
    //LE METEMOS ESTILOS AHORA!!!
    //styleUrls: ["../assets/css/estilos.css"]
})

@RouteConfig([
	{path: "/principal", name: "Principal", component: PrincipalPaginaComponent, useAsDefault: true},
    {path: "/apply", name: "Apply", component: AplysComponent},
    {path: "/farmeoteca", name: "Farmeoteca", component: FarmeotecaComponent},

	{path: "/guerrero", name: "Warrior", component: WarriorComponent},
    {path: "/paladin", name: "Paladin", component: PaladinComponent},
    {path: "/dk", name: "Dk", component:DkComponent},



    {path: "/herboristeria", name:"Herboristeria", component: HerboristeriaComponent},
    {path: "/mineria", name:"Mineria", component:MineriaComponent},

    {path: "/arqueologia", name:"Arqueologia", component: ArqueologiaComponent},

    {path: "/eventos", name:"Eventos", component: EventosComponent},
    {path: "/usuarios", name:"Usuarios", component: UsuariosComponent},
    {path: "/mostrar", name:"Mostrar", component: MostrarComponent}
	])
    
    


export class AppComponent{ 

}


