import { UserService } from './../../services/user.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  constructor(private userService: UserService) { }
  fullname: string = ''
  username: string = ''
  password: string = ''
  loggedinUser!: User
  isLogin: boolean = true
  ngOnInit(): void {
    this.loggedinUser = this.userService.getLoggedinUser()
  }

  onLogin() {
    console.log('login')
    const user = {username:this.username,password:this.password}
    this.userService.login(user)
  }
  
  onSignup() {
    const user = {username:this.username,password:this.password,fullname:this.fullname}
    this.userService.singup(user)
  }


}
