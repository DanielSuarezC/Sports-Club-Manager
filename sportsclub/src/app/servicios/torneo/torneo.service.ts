import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TorneoResponse } from 'src/app/modelo/torneo/torneo';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  baseUrl = environment.urlServices + 'torneo/';

  constructor(private httpClient: HttpClient) { }

  public guardar(torneo: any): Observable<any> {
    return this.httpClient.post(this.baseUrl+'add.php', torneo);
  }

  public consultarTorneos(): Observable<TorneoResponse> {
    return this.httpClient.get<TorneoResponse>(this.baseUrl + 'getAll.php');
  }
}
