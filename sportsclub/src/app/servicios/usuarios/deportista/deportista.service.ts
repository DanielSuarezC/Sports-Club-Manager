import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeportistaResponse } from 'src/app/modelo/deportista/deportista';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeportistaService {

  baseUrl = environment.urlServices + 'deportista/';

  constructor(private httpClient: HttpClient) { }

  public guardar(deportista: any): Observable<any> {
    return this.httpClient.post(this.baseUrl+'addC.php', deportista);
  }

  public consultarDeportistas(): Observable<DeportistaResponse> {
    return this.httpClient.get<DeportistaResponse>(this.baseUrl + 'getAll.php');
  }
}
