import { NgModule } from '@angular/core'; //Se trata de un modulo de angular, basicamente es un decorador con metadatos
import { BrowserModule } from '@angular/platform-browser'; //Se renderiza se especifica para cargar la app(o modulo) en el navegador
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component'; // Importamos nuestro componente principal, en este caso.
import { FormsModule } from '@angular/forms';
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

@NgModule({ // Estamos declarando el modulo como se tiene que ejecutar a travez del decorador creado, estos serian sus metadatos.
  declarations: [ //Le indicamos que va a tener un AppComponent y que va ser renderizable en nuestra app.
    AppComponent, SaludoComponent, ListaContactosComponent, LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Este es un modulo personalizado que exporta componentes de tipos listas
    ListsModule,
     //Importamos el modulo para poder renderizar el navegador y ver la app funcionando.
     HttpClientModule
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