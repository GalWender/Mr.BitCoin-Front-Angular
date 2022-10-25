import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mr.BitCoin-Front';

  routeName: string = 'home'

  changeRoute(route:string) {
    this.routeName = route
  }
}
