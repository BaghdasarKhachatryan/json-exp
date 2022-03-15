import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';


export interface User {
  username:string
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  setToken(token:string){
    window.localStorage.setItem('token',token)
  }
  isLoggedIn():boolean{
    return this.getToken()!== null
  }

  getToken():string|null{
    return window.localStorage.getItem('token')
  }
  logout(){
    window.localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
  login(user:User):Observable<any>{
    if(user.username === 'Admin' && user.password === '12345'){
      this.setToken('secret')
      return of(user)
    }
     return throwError(()=>new Error('Failed to login'))
  }
}
