import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  object: post | null = null;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<post> {
    const objectTemp = this.http.get<post>('../../assets/db.json');
    objectTemp.subscribe((data) => (this.object = data));
    return objectTemp;
  }
}
