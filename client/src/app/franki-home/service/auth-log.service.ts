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
  globalUser: String;
  constructor ( private http: Http ) { }

  // ABOUT (PROFILE)
  getUser() {
    return this.http.get(`${environment.BASE_URL}/user/profile`, { withCredentials:true })
      .pipe(map((res) => res.json()));
  }

  // EDIT
  editUser(newUser) {
    return this.http.put( `${environment.BASE_URL}/user/edit`, newUser, { withCredentials:true } )
      .pipe(map((res) => res.json()));
  }

  //DELETE
  removeUser() {
    return this.http.delete(`${environment.BASE_URL}/user/delete`, { withCredentials:true })
      .pipe(map((res) => res.json()));
  }

  // Errors
  handleError(e) {
    return throwError(e.json().message);
  }

//SIGNUP
 signup(user) {
    return this.http.post(`${environment.BASE_URL}/auth/signup`, user, { withCredentials:true }). pipe(map(res => res.json()), catchError(this.handleError));
};

//LOGIN
  login ( user )
  {
    return this.http.post(`${environment.BASE_URL}/auth/login`, user, { withCredentials:true }).pipe(map(res => res.json()), catchError(this.handleError));
};

  //Logged In check
 isLoggedIn() {
   return this.http.get( `${environment.BASE_URL}/auth/loggedin`, { withCredentials:true }).pipe(map(res => res.json()),catchError(this.handleError));
};

//LOGOUT
 logout() {
    return this.http.post(`${environment.BASE_URL}/auth/logout`, { withCredentials: true }).pipe(map(res => console.log(res.json())), catchError(this.handleError));
}

  
  // FUNCTIONS OF THE ARDUINO START HERE 
  
  
//BLINK
  blink()
  {
    return this.http.get(`${environment.BASE_URL}/functions/1`, {
       withCredentials:true 
    }).pipe(map(res => res.json()), catchError(this.handleError));
  };

//TURN OFF LED
  turnOff()
  {
    return this.http.get(`${environment.BASE_URL}/functions/2`, {
      withCredentials:true
    }).pipe(map(res => res.json()), catchError(this.handleError));
  };

//LED RED
redLED()
  {
    return this.http.get(`${environment.BASE_URL}/functions/3`, {
      withCredentials:true
    }).pipe(map(res => res.json()), catchError(this.handleError));
  };

//LED BLUE
blueLED()
  {
    return this.http.get(`${environment.BASE_URL}/functions/4`, {
      withCredentials:true
    }).pipe(map(res => res.json()), catchError(this.handleError));
  };

//LED GREEN
greenLED()
  {
    return this.http.get(`${environment.BASE_URL}/functions/5`, {
      withCredentials:true
    }).pipe(map(res => res.json()), catchError(this.handleError));
  };

//TEXT LCD SCREEN
textLCD(text)
  {
    console.log(text);
    return this.http.post(`${environment.BASE_URL}/functions/6`, text, { withCredentials:true }).pipe(map(res => res.json()), catchError(this.handleError));
}
  
//RUNNING MAN
runningMan()
  {
    return this.http.get(`${environment.BASE_URL}/functions/7`, {
      withCredentials:true
    }).pipe(map(res => res.json()), catchError(this.handleError));
}
  
//SERVO ON
servoON()
  {
    return this.http.get(`${environment.BASE_URL}/functions/8`, {
      withCredentials:true
    }).pipe(map(res => res.json()), catchError(this.handleError));
}
  
//SERVO OFF
servoOFF()
  {
    return this.http.get(`${environment.BASE_URL}/functions/9`, {
      withCredentials:true
    }).pipe(map(res => res.json()), catchError(this.handleError));
  }
}