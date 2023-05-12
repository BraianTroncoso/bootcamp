import { Injectable } from '@angular/core';

// Importamos la lista de contactos MOCK
import { CONTACTOS } from '../mocks/contacto.mocks';
import { Icontacto } from '../models/contacto.interface';

// importamos Observables de rxjs
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<Icontacto[]>{
    return Promise.resolve(CONTACTOS); // Nos devuelve un listado de contactos
  }


  // Buscamos el contacto por ID dentro de la lista CONTACTOS mockeados
  obtenerContactosPorID(id: number): Observable<Icontacto>| undefined{
    const contacto = CONTACTOS.find((contacto : Icontacto) => contacto.id === id);
// Creamos un observable
let observable: Observable<Icontacto>= new Observable(observer => {
  observer.next(contacto); // Emitir un valor a todo componente suscrito
  observer.complete(); // No emitimos más valores
})
    if(contacto){
      return observable;
    }else{
      return;
    }
  }
}

