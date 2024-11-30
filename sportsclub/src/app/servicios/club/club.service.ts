import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club, ClubResponse } from 'src/app/modelo/club/club';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  baseUrl = environment.urlServices + 'club/';

  constructor(private httpClient: HttpClient) { }

  public guardarClub(club: any): Observable<any> {
    return this.httpClient.post(this.baseUrl+'addClub.php', club);
  }

  public consultarClubes(): Observable<ClubResponse> {
    return this.httpClient.get<ClubResponse>(this.baseUrl + 'getAll.php');
  }


  public consultarClubesbyFilters(
    idclub: number | null,
    nombre: string | null,
    ciudad: string | null,
    registroInicial: number | null,
    registrosPorPagina: number | null
  ): Observable<ClubResponse> {
    let params = new HttpParams();
  
    // Solo se agregan parámetros si no son nulos o vacíos
    if (idclub !== null && idclub !== 0) {
      params = params.set('idclub', idclub.toString());
    }else{
      params = params.set('idclub', 0);
    }
    if (nombre && nombre.trim() !== '') {
      params = params.set('nombre', nombre.trim());
    }else{
      params = params.set('nombre', "");
    }
    if (ciudad && ciudad.trim() !== '') {
      params = params.set('ciudad', ciudad.trim());
    }
    else{
      params = params.set('ciudad', "");
    }
  
    // Agregar parámetros de paginación si están presentes
    if (registroInicial !== null) {
      params = params.set('registroInicial', registroInicial.toString());
    }
    if (registrosPorPagina !== null) {
      params = params.set('registrosPorPagina', registrosPorPagina.toString());
    }
  
    console.log('Consulta con filtros:', params);
  
    // Realizar la solicitud GET con los parámetros
    return this.httpClient.get<ClubResponse>(this.baseUrl + 'getbyFilters.php', { params });
  }
  
}
