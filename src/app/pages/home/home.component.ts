import { BitcoinService } from './../../services/bitcoin.service';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private UserService: UserService, private BitcoinService: BitcoinService) { }
  
  loggedinUser!: User
  rate!: number
  ngOnInit(): void {
    this.loggedinUser = this.UserService.getLoggedinUser()
    this.BitcoinService.getRate().subscribe(currRate => this.rate = currRate)
  }
}
