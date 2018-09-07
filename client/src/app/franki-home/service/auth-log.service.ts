import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthLogService {

  constructor ( private http: Http ) { }
  
  getUser() {
    return this.http.get(`${environment.BASE_URL}/user/profile`)
      .pipe(map((res) => res.json()));
  }

  editUser(newUser) {
    return this.http.put( `${environment.BASE_URL}/user/edit`, newUser )
      .pipe(map((res) => res.json()));
  }

  removeUser() {
    return this.http.delete(`${environment.BASE_URL}/user/delete`)
      .pipe(map((res) => res.json()));
  }
}
