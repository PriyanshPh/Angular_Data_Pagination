import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/Users";
  getUsers(){
    return this.http.get<Users[]>(this.url);
  }
  // postUsers(){
  //   return this.http.post<Users[]>(this.url);
  // }
}
