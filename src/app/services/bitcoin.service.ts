import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }
  public getRate() {
    return this.http.get<{ USD: {last:number} }>('https://blockchain.info/ticker')
        .pipe(
            map(res => {
              return res.USD.last
            }
              )
        )
}
}
