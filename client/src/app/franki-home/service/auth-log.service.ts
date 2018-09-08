import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthLogService
{

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

  handleError(e) {
    return throwError(e.json().message);
  }

 signup(user) {
    return this.http.post(`${environment.BASE_URL}/auth/signup`, user). pipe(map(res => res.json()), catchError(this.handleError));
};

  login(user) {
    return this.http.post(`${environment.BASE_URL}/auth/login`, user, { withCredentials:true }) .pipe(map(res => res.json()), catchError(this.handleError));
};

 isLoggedIn() {
   return this.http.get( `${environment.BASE_URL}/auth/loggedin`, { withCredentials: true } ).pipe(map(res => res.json()),catchError(this.handleError));
};

 logout() {
    return this.http.get(`${environment.BASE_URL}/auth/logout`, { withCredentials: true }) .pipe(map(res => res.json()), catchError(this.handleError));
}



}
