import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  baseUrl = environment.urlServices + 'addClub.php';

  constructor(private httpClient: HttpClient) { }

  public guardarClub(club: any): Observable<any> {
    return this.httpClient.post(this.baseUrl, club);
  }
}
