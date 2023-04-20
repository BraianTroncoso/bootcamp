import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//Punto de entrada del proyecto
platformBrowserDynamic().bootstrapModule(AppModule)//Modulo principal que carga todo.
  .catch(err => console.error(err));//boostrapmoModule, es el modulo que inicia el modulo principal AppModule.
//No tiene nada que ver con boostrap5.

