import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsPeopleService {

  constructor(private http: HttpClient) {}

  getStarWarsPeople(): Observable<any> {
    return this.http.get('https://swapi.dev/api/people/?page=1');
  }
}
