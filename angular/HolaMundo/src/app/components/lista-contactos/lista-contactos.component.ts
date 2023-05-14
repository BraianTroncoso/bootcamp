import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Icontacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit, OnDestroy {
// Creamos una lista de contactos
  listaContactos : Icontacto [] = [];
  contactoSeleccionado : Icontacto | undefined;
// Subscripción del Servicio

subscription: Subscription | undefined;


  // Inyectamos en el constructor el servicio de contactos
  constructor(private contactoService : ContactoService){
  }

  ngOnInit(): void {
    // Obtener la lista de contactos que nos brinda el servicio
   this.contactoService.obtenerContactos()
   .then((lista:Icontacto[]) => this.listaContactos = lista)
   .catch((error) => console.error(`Ha habido un error al recuperar la lista de contactos${error}`))
   .finally(() => console.log('Peticion del contacto por id terminada completamente'));
  
  }
  obtenerContacto(id: number){
   this.subscription = this.contactoService.obtenerContactosPorID(id)?.subscribe((contacto : Icontacto) => this.contactoSeleccionado = contacto)
}
ngOnDestroy(): void {
  this.subscription?.unsubscribe;
}
}