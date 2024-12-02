import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntrenamientoResponse } from 'src/app/modelo/entrenamiento/entrenamiento';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntrenamientoService {

  baseUrl = environment.urlServices + 'entrenamiento/';

  constructor(private httpClient: HttpClient) { }

  public guardar(entrenamiento: any): Observable<any> {
    return this.httpClient.post(this.baseUrl+'add.php', entrenamiento);
  }

  public consultarEntrenamientos(): Observable<EntrenamientoResponse> {
    return this.httpClient.get<EntrenamientoResponse>(this.baseUrl + 'getAll.php');
  }
}
