import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { User } from '../models/user.model'



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userDb: User = {
    _id: getRandomId(),
    fullname: 'gal wender',
    username: 'd',
    password: 'd',
    imgUrl:'',
    balance:100,
    transactions: []
  }

  // private _userDb: User = USER
  private _user$ = new BehaviorSubject<User>({ _id: '', fullname: '', username: '', password: '', imgUrl: '', balance: 100, transactions: [] })
  public user$ = this._user$.asObservable()
  constructor() { }
  public getLoggedinUser() {
    const user = this._userDb
    return user
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