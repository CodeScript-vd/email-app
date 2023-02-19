import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiGateway } from '../gateway/api.gateway';
import { SendEmailRequest } from '../shared/interfaces';
import { EmailApiResponse } from '../shared/models/email-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class EmailableService implements ApiGateway {
  private url = 'https://api.emailable.com/v1';
  private apiKey = 'live_69e361947b62447eba46'

  constructor(private http: HttpClient) { }

  sendEmail<T>(emailRequest: SendEmailRequest): Observable<T> {
    throw new Error('Method not implemented.');
  }
  validateEmail<T>(email: string): Observable<T> {
    const endpoint = `${ this.url }/verify?email=${ email }&api_key=${ this.apiKey }`;
    return this.http.get<T>(endpoint).pipe(
      map(resp => {
        const { response, autocorrect, status } = new EmailApiResponse(resp);
        return {
          ...response,
          response,
          autocorrect,
          status,
        }
      })
    );
  }
  validatePhoneNumber<T>(phone: string): Observable<T> {
    throw new Error('Method not implemented.');
  }
}
