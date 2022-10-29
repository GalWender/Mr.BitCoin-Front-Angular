import { map } from 'rxjs/operators';
import { Contact } from './../models/contact.model';
import { JwtService } from './jwt.service';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError, distinctUntilChanged } from 'rxjs';
import { User } from '../models/user.model'
import { HttpClient } from '@angular/common/http';


// const URL_USER = '/user'
// const URL_AUTH = '/auth'
const URL = 'http://localhost:3030/api'
const STORAGE_KEY_LOGGEDIN_USER:any = 'loggedinUser' 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private currentUserSubject = new BehaviorSubject<User>({} as User);
  // public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private _userDb: User = {
    _id: getRandomId(),
    fullname: 'gal wender',
    username: 'd',
    password: 'd',
    imgUrl: '',
    balance: 100,
    transactions: []
  }

  // private _userDb: User = USER
  private _user$ = new BehaviorSubject<User>({} as User)
  public user$ = this._user$.asObservable()
  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService,
  ) { }
  getLoggedinUser(): any {
    const res =  JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || '')
    if(res === '') return null
    else{return res}
  }

  update(user: any) {
    user = this.http.put(URL+`/user${user._id}`,user).subscribe((res:any)=>{
      if(this.getLoggedinUser()._id === res._id) this.saveLocalUser(res)
      return res
    })
  }

  login(creds: { username: string, password: string }) {
    return this.http.post(URL+'/auth/login',creds).subscribe((res)=>{
      if(res){
        return this.saveLocalUser(res)
      }
    })
  }

  singup(creds: { fullname: string, username: string, password: string }) {
    return this.http.post(URL+'/auth/signup',creds).subscribe((res)=>{
      return this.saveLocalUser(res)
    })
  }
  logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return this.http.post(URL+'/auth/logout',null).subscribe((res)=>{
      
    })
  }
  getUsers() {
    return this.http.get(URL+'/user').subscribe((res)=>{
      return res
    })
  }
  getUserById(userId: string) {
    return this.http.get(URL+userId).subscribe(res=>{
      return res
    })
  }
  saveLocalUser(user: any) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
  }
  updateBalance(transDetail: { to: Contact, amount: number }) {

  }
}


function getRandomId(length = 8): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      characters.length));
  }
  return result;
}