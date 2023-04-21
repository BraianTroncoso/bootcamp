import { Component } from '@angular/core'; // Tenemos el angular core que es de donde va exportar un nuevo
// decorador experimental de ts llamado Component
// Inyecta como metadatos selector, templateUrl,styleUrl
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Ruta donde se encuentra la plantilla html que se tiene que renderizar.
  styleUrls: ['./app.component.scss'] // Ruta donde se encuentra la plantila scss que se tiene que renderizar.
})
export class AppComponent {
  title = 'HolaMundo'; // Variable que se esta exportando a la vista.
  usuario = '@braiangmail';
}
