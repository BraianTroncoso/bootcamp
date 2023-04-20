import { NgModule } from '@angular/core'; //Se trata de un modulo de angular, basicamente es un decorador con metadatos
import { BrowserModule } from '@angular/platform-browser'; //Se renderiza se especifica para cargar la app(o modulo) en el navegador

import { AppComponent } from './app.component'; // Importamos nuestro componente principal, en este caso.

@NgModule({ // Estamos declarando el modulo como se tiene que ejecutar a travez del decorador creado, estos serian sus metadatos.
  declarations: [ //Le indicamos que va a tener un AppComponent y que va ser renderizable en nuestra app.
    AppComponent
  ],
  imports: [
    BrowserModule //Importamos el modulo para poder renderizar el navejador y ver la app funcionando.
  ],
  providers: [],
  bootstrap: [AppComponent] //Indicamos cual es el componente que inicia nuestro modulo
})

// Con el docorador @NgModule indicamos que AppModule debe incorporar todos los datos que solicitamos
// Definiendo nuestro origen de la app, lo que tiene que cargar y lo que no.
export class AppModule { }

/*
Los modulos hay que pensarlos como cajas que pueden contener informacion
y cada caja tendrá informacion, por lo tanto aca estamos importando un modulo, que por dentro tendria
*/