import { Component, OnInit } from '@angular/core';
import { Icontacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit {
// Creamos una lista de contactos
  listaContactos : Icontacto [] = [];
  contactoSeleccionado : Icontacto | undefined;

  // Inyectamos en el constructor el servicio de contactos
  constructor(private contactoService : ContactoService){
  }

  ngOnInit(): void {
    // Obtener la lista de contactos que nos brinda el servicio
   this.contactoService.obtenerContactos()
   .then((lista:Icontacto[]) => this.listaContactos = lista)
   .catch((error) => console.error(`Ha habido un error al recuperar la lista de contactos${error}`))
   .finally(() => console.log('Peticion del contacto por id terminada'));
  
  }
  obtenerContacto(id: number){
   this.contactoService.obtenerContactosPorID(id)
   ?.then((contacto : Icontacto) => this.contactoSeleccionado = contacto)
   .catch((error) => console.error(`Ha habido un error al recuperar el contacto${error}`))
   .finally(() => console.log('Peticion del contacto por id terminada'));
  }

}
