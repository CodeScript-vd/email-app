import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiGateway } from '../gateway/api.gateway';
import { SendEmailRequest } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ReacherService implements ApiGateway {
  private url = 'https://api.reacher.email/v0/check_email';
  private apiKey = '9d999132-af11-11ed-bedf-f73f2d8f00b6';
  private header = new HttpHeaders({
    'Authorization': `${ this.apiKey }`
  });

  constructor() { }
  sendEmail<T>(emailRequest: SendEmailRequest): Observable<T> {
    throw new Error('Method not implemented.');
  }
  validateEmail<T>(email: string): Observable<T> {
    const endpoint = `${ this.url }`
    throw new Error('Method not implemented.');
  }
  validatePhoneNumber<T>(phone: string): Observable<T> {
    throw new Error('Method not implemented.');
  }
}
