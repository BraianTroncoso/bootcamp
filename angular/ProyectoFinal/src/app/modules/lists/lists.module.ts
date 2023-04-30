import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';
import { SaludoComponent } from 'src/app/components/saludo/saludo.component';



@NgModule({
  declarations: [
    ListaBasicaComponent
  ],
  imports: [
    CommonModule,
    
    
  ],
  exports: [
    // Exportamos aquellas clases COmponentes, pypies, services ,etc. Que queramos compartir a quien
    // Importe este módulo
    ListaBasicaComponent
  ]
})
export class ListsModule { }
