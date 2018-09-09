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

  // ABOUT (PROFILE)
  getUser() {
    return this.http.get(`${environment.BASE_URL}/user/profile`)
      .pipe(map((res) => res.json()));
  }

  // EDIT
  editUser(newUser) {
    return this.http.put( `${environment.BASE_URL}/user/edit`, newUser )
      .pipe(map((res) => res.json()));
  }

  //DELETE
  removeUser() {
    return this.http.delete(`${environment.BASE_URL}/user/delete`)
      .pipe(map((res) => res.json()));
  }

  // Errors
  handleError(e) {
    return throwError(e.json().message);
  }

//SIGNUP
 signup(user) {
    return this.http.post(`${environment.BASE_URL}/auth/signup`, user). pipe(map(res => res.json()), catchError(this.handleError));
};

//LOGIN
  login(user) {
    return this.http.post(`${environment.BASE_URL}/auth/login`, user, { withCredentials:true }) .pipe(map(res => res.json()), catchError(this.handleError));
};

 isLoggedIn() {
   return this.http.get( `${environment.BASE_URL}/auth/loggedin`, { withCredentials: true } ).pipe(map(res => res.json()),catchError(this.handleError));
};

//LOGOUT
 logout() {
    return this.http.get(`${environment.BASE_URL}/auth/logout`, { withCredentials: true }) .pipe(map(res => res.json()), catchError(this.handleError));
}


}