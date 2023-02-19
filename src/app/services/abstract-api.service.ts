import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiGateway } from '../gateway/api.gateway';
import { SendEmailRequest } from '../shared/interfaces';
import { EmailApiResponse } from '../shared/models/email-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class AbstractApiService implements ApiGateway {

  private emailApiKey = 'ff242846262d473cb7712ae4a07a6496';
  private phoneApiKey = 'b2c88b2d641840e084ecfd6202196cd7';
  private emailUrl = `https://emailvalidation.abstractapi.com/v1/?api_key=${this.emailApiKey}`;
  private phoneUrl = `https://phonevalidation.abstractapi.com/v1/?api_key=${this.phoneApiKey}`;

  constructor(private http: HttpClient) { }
  
  sendEmail<T>(emailRequest: SendEmailRequest): Observable<T> {
    return new Observable(obs => {obs.error('Method not implemented.'); obs.complete()});
    // throw new Error('Method not implemented.');
  }

  validateEmail<T>(email: string): Observable<T> {
    const endpoint = `${this.emailUrl}&email=${email}`;
    return this.http.get<T>(endpoint).pipe(
      map((resp) => {
        const { status, autocorrect, response  } = new EmailApiResponse(resp);
        return {
          ...response,
          response,
          status,
          autocorrect,
        };
      })
    );
  }

  validatePhoneNumber<T>(phone: string): Observable<T> {
    const endpoint = `${this.phoneUrl}&phone=${phone}`;
    return this.http.get<T>(endpoint);
  }
}
