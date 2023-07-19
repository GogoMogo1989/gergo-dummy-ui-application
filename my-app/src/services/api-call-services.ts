import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallServices {
  private apiUrl = 'https://random-data-api.com/api/v2/users?size=20&is_xml=true';

  constructor(private http: HttpClient) { }

  getUsersData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
