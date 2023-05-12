import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  constructor(private authService: AuthService){}

  ngOnInit(): void {
    
    this.authService.login('eve.holt@regres.in','cityslicka').subscribe(Response => {
      console.log('Respuesta Login', Response),
      (error : any) => console.error(`Ha ocurrido un error en el proceso login${error}`),
      () => console.info('Se ha completado la llamada a Login REQRES')
    })

  }
}
