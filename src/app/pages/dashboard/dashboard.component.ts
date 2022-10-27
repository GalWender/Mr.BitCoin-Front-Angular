import { BitcoinService } from './../../services/bitcoin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private BitcoinService: BitcoinService) { }

  chartData!:[{ x: number, y: number }]
  chartX:Array<string> = []
  chartY:Array<number> = []
  ngOnInit(): void {
    this.BitcoinService.getMarketPriceHistory().subscribe(values=> values.forEach(data=>{
      this.chartX.push(new Date(data.x*1000).toLocaleDateString())
      this.chartY.push(data.y)
    }))
  }

}
