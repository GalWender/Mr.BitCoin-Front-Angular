import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }
  public getRate() {
    return this.http.get<{ USD: { last: number } }>('https://blockchain.info/ticker')
      .pipe(
        map(res => {
          return res.USD.last
        }
        )
      )
  }
  public getMarketPriceHistory() {
    return this.http.get<{ values: [{ x: number, y: number }] }>('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
      .pipe(
        // tap(x=>console.log(x.values)),
        map(res => {
          return res.values
        }
        )
      )
  }
}
