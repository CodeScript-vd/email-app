import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiGateway } from '../gateway/api.gateway';
import { SendEmailRequest } from '../shared/interfaces';
import { EmailApiResponse } from '../shared/models/email-api-response.model';
import { getState } from '../shared/utils/helpers';

@Injectable({
  providedIn: 'root'
})
export class HunterApiService implements ApiGateway {

  private apiKey = 'f058bc8e8ebc0a16022bbee25d8710ede6c9aeee';
  private url = `https://api.hunter.io/v2/email-verifier`;

  constructor(private http: HttpClient) { }
  sendEmail<T>(emailRequest: SendEmailRequest): Observable<T> {
    throw new Error('Method not implemented.');
  }
  validateEmail<T>(email: string): Observable<T> {
    const endpoint = `${ this.url }?email=${ email }&api_key=${ this.apiKey }`;
    return this.http.get<T>(endpoint).pipe(
      map(resp => {
        const { response, status } = new EmailApiResponse(resp);
        return {
          ...response,
          response,
          status,
        }
      })
    );
  }
  validatePhoneNumber<T>(phone: string): Observable<T> {
    throw new Error('Method not implemented.');
  }
}
