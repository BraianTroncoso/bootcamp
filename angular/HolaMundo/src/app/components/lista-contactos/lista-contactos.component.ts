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

  // Inyectamos en el constructor el servicio de contactos
  constructor(private contactoService : ContactoService){
  }

  ngOnInit(): void {
    // Obtener la lista de contactos que nos brinda el servicio
    this.listaContactos = this.contactoService.obtenerContactos();
    console.table(this.listaContactos); 
  }
  obtenerContacto(id: number){
    alert(`Obtenemos informacion del contacto: ${id}`)
  }
}
