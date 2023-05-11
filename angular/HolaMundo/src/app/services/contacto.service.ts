import { Injectable } from '@angular/core';

// Importamos la lista de contactos MOCK
import { CONTACTOS } from '../mocks/contacto.mocks';
import { Icontacto } from '../models/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Icontacto[] {
    return CONTACTOS; // Nos devuelve un listado de contactos
  }

  // Buscamos el contacto por ID dentro de la lista CONTACTOS mockeados
  obtenerContactosPorID(id: number): Icontacto | undefined{
    const contacto = CONTACTOS.find((contacto : Icontacto) => contacto.id === id);

    if(contacto){
      return contacto;
    }else{
      return;
    }
  }
}

