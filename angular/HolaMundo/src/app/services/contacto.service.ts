import { Injectable } from '@angular/core';

// Importamos la lista de contactos MOCK
import { CONTACTOS } from '../mocks/contacto.mocks';
import { Icontacto } from '../models/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<Icontacto[]>{
    return Promise.resolve(CONTACTOS); // Nos devuelve un listado de contactos
  }


  // Buscamos el contacto por ID dentro de la lista CONTACTOS mockeados
  obtenerContactosPorID(id: number): Promise<Icontacto>| undefined{
    const contacto = CONTACTOS.find((contacto : Icontacto) => contacto.id === id);

    if(contacto){
      return Promise.resolve(contacto);
    }else{
      return;
    }
  }
}

