import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntrenadorResponse } from 'src/app/modelo/entrenador/entrenador';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntrenadorService {

  baseUrl = environment.urlServices + 'entrenador/';

  constructor(private httpClient: HttpClient) { }

  public guardar(entrenador: any): Observable<any> {
    return this.httpClient.post(this.baseUrl+'add.php', entrenador);
  }

  public consultarEntrenadores(): Observable<EntrenadorResponse> {
    return this.httpClient.get<EntrenadorResponse>(this.baseUrl + 'getAll.php');
  }
}
