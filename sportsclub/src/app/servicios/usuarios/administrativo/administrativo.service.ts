import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdministrativoResponse } from 'src/app/modelo/administrativo/administrativo';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdministrativoService {

  baseUrl = environment.urlServices + 'administrativo/';

  constructor(private httpClient: HttpClient) { }

  public guardar(Administrativo: any): Observable<any> {
    return this.httpClient.post(this.baseUrl+'addAdministrativo.php', Administrativo);
  }

  public consultarAdministrativos(): Observable<AdministrativoResponse> {
    return this.httpClient.get<AdministrativoResponse>(this.baseUrl + 'getAll.php');
  }
}
