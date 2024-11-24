import { Component, OnInit } from '@angular/core';
import { environment } from 'src/enviroments/environment';
// import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sportsclub';

  menuselect = '';

  baseUrl = environment.urlAplicacion;
  // constructor(private cookieService: CookieService) {

  // }

  ngOnInit(): void {
    //console.debug(window.location.toString());
    if (window.location.toString() === this.baseUrl + '#/login' ||
        window.location.toString() === this.baseUrl + '/login') {

    } else if (window.location.toString() === this.baseUrl + '#/' ||
      window.location.toString() === this.baseUrl) {
      window.location.href = this.baseUrl + '#/login';
    } else {
      // const token = this.cookieService.get(environment.nombreCookieToken);
      // if (token === null || !token || token === undefined || token === '') {
      //   window.location.href = this.baseUrl + '#/login';
      // } else {
      //   console.log('here else')
      //   // this.usuarioService.consultarUsuarioValidado().subscribe( value => {
      //   //   if (value.isError === 'N') {
      //   //     const usuario = value.datos as Usuario;
      //   //     if (usuario === null || usuario.id === 0) {
      //   //       window.location.href = this.baseUrl + '#/login';
      //   //     }
      //   //   } else {
      //   //     window.location.href = this.baseUrl + '#/login';
      //   //   }
      //   // }, error => {
      //   //   window.location.href = this.baseUrl + '#/login';
      //   // });
      // }
    }
  }
}
