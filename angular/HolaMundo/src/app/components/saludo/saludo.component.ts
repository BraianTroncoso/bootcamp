import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges}from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges{

@Input()  nombre: string = "Anonimo"; //Le estamos pasando el valor literal
@Output() mensajeEmitter : EventEmitter<string> = new EventEmitter<string>();
myStyle: Object = {
  color: 'blue',
  fontSize: '20px',
  fontWeight: 'bold'
}
/*
Input: Informacion de componente padre a hijos
Output: Son eventos que ocurren en el hijo y ejecutan algo en el padre
*/
/*
Los componentes padres de orden mayor manejan todo lo que sea lógica y tambien los datos
y los componentes de orden inferior intentan tener solo una renderizacion de la informacion que se le pasa
por input y ejecutar aquello que se le implemente por Output.
*/
  constructor() {}


  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges CAMBIO: valor anterior" , changes['nombre'].previousValue);
    console.log("ngOnChanges CAMBIO: valor anterior" , changes['nombre'].currentValue);

  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy El componente va a desaparece");
  }

  ngOnInit(): void {
   // Instrucciones previas a la renderizacion del componente
   console.log("ngOnInit del componente Saludo");
  }

  
  /* 
  Ejemplo para gestionar un evento de tipo click en el dom y enviar un texto al componente padre
  */
enviarMensajeAlPadre(): void{
  //alert(`Hola, ${this.nombre}, alerta despachada desde un click de botón`);
  this.mensajeEmitter.emit(`Hola, ${this.nombre}, alerta despachada desde un click de botón`);
 }
}

// Orden del ciclo de vida de los componenentes:
//* 1. ngChanges // Modificacion del componente
//* 2. ngInit // Carga de datos e informacion
//* 3. ngAfterContentInit
//* 4. ngAfterContentChecked
//* 5. ngAfterViewInit
//* 6. ngViewChecked
//* 7. ngAfterContentChecked
//* 8. ngAfterViewChecked
//* 9. ngDestroy // Eliminacion del componente







