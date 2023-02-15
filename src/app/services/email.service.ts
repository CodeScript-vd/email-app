import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SendEmailRequest } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  sendEmail(request: SendEmailRequest): Observable<any> {
    const endpoint = `${this.url}/sendEmail`;
    return this.http.post(endpoint, request);
  }
}
