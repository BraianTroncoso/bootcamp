import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';



@NgModule({
  declarations: [
    ListaBasicaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // Exportamos aquellas clases [componentes/pipes, services, etc] que queramos compartir a quien
    // importe este módulo
    ListaBasicaComponent // Sino lo exportaramos nos tiraria un error donde quisieramos que se pueda usar
    // Por ejm: Estos componenes se cargan al modulo list y que a su vez el modulo list se carga al app.module
    // y por ende app tiene todo los componentes que contenga el módulo listo, ahora si el módulo listo no estuviera
    // Exportando el modulo ListaBasicaComponent, este no podria ser visible y ejecutable en otro componente.
  ]
})
export class ListsModule { }
