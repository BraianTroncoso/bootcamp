import { Component,OnInit,Input, Output} from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {

@Input()  nombre: string = "Anonimo"; //Le estamos pasando el valor literal
@Output() saludo = new Output;
/*
Input: Informacion de componente padre a hijos
Output: Son eventos que ocurren en el hijo y ejecutan algo en el padre
*/
  constructor() {}

  ngOnInit(): void {
   // Instrucciones previas a la renderizacion del componente
   console.log("ngOnInit del componente Saludo");
  }

  /* 
  Ejemplo para gestionar un evento de tipo click en el dom
  */
alertaSaludo(): void{
  alert(`Hola, ${this.nombre}, alerta despachada desde un click de botón`);
 }
}
