import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiGateway } from '../gateway/api.gateway';
import { SendEmailRequest } from '../shared/interfaces';
import { SendSengridRequest } from '../shared/models/sengrid-request.model';
// import * as sgMail  from '@sendgrid/mail';

@Injectable({
  providedIn: 'root'
})
export class SendgridService implements ApiGateway {

  private sendEmailKey = `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`;
  private url = `https://api.sendgrid.com/v3`;
  private header: HttpHeaders = new HttpHeaders({
    'Authorization': `Bearer ${this.sendEmailKey}`
  });

  constructor(private http: HttpClient) { }
  sendEmail<T>(emailRequest: SendEmailRequest): Observable<T> {
    const endpoint = `${this.url}/mail/send`;
    const body = new SendSengridRequest(emailRequest).body;
    throw new Error('');
    // return this._sendEmail<T>(emailRequest);
  }
  validateEmail<T>(email: string): Observable<T> {
    throw new Error('Method not implemented.');
  }
  validatePhoneNumber<T>(phone: string): Observable<T> {
    throw new Error('Method not implemented.');
  }
}
