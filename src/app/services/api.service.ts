import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

// import { JwtService } from './jwt.service';
import { catchError } from 'rxjs/operators';

const environment = process.env['NODE_ENV'] === 'production'
    ? '/api/'
    : 'http://localhost:3030/api'


@Injectable()
export class ApiService {
    constructor(
        private http: HttpClient,
        // private jwtService: JwtService
    ) { }

    private formatErrors(error: any) {
        return throwError(() => error.error);
    }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${environment}${path}`, { params })
            .pipe(catchError(this.formatErrors));
    }

    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(
            `${environment}${path}`,
            JSON.stringify(body)
        ).pipe(catchError(this.formatErrors));
    }

    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(
            `${environment}${path}`,
            JSON.stringify(body)
        ).pipe(catchError(this.formatErrors));
    }

    delete(path: string): Observable<any> {
        return this.http.delete(
            `${environment}${path}`
        ).pipe(catchError(this.formatErrors));
    }
}
