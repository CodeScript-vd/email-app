import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiGateway } from '../gateway/api.gateway';
import { SendEmailRequest } from '../shared/interfaces';
import { EmailApiResponse } from '../shared/models/email-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class CaptainVerifyService implements ApiGateway {
  private url = `https://api.captainverify.com/v2`;
  private apiKey = `f7AkTr2500w3c47nNn7XePhL6BfI2OF1`;
  constructor(private http: HttpClient) { }

  sendEmail<T>(emailRequest: SendEmailRequest): Observable<T> {
    throw new Error('Method not implemented.');
  }

  validateEmail<T>(email: string): Observable<T> {
    const endpoint = `${ this.url }/verify?apikey=${ this.apiKey }&email=${ email }`;
    return this.http.get<T>(endpoint).pipe(
      map(resp => {
        const { status, response, autocorrect } = new EmailApiResponse(resp);
        return {
          ...response,
          status,
          autocorrect,
          response,
        }  
      }),
    );
  }

  validatePhoneNumber<T>(phone: string): Observable<T> {
    throw new Error('Method not implemented.');
  }
}
