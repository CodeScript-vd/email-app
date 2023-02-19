import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiGateway } from '../gateway/api.gateway';
import { SendEmailRequest } from '../shared/interfaces';
import { EmailApiResponse } from '../shared/models/email-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ZerobonceService implements ApiGateway {
  private apiKey = '0bf84a41c766438cb885d20accb0c05c';
  private url = 'https://api.zerobounce.net/v2/validate';

  constructor(private http: HttpClient) { }

  sendEmail<T>(emailRequest: SendEmailRequest): Observable<T> {
    throw new Error('Method not implemented.');
  }
  validateEmail<T>(email: string): Observable<T> {
    const endpoint = `${ this.url }?api_key=${ this.apiKey }&email=${ email }&ip_address=`;
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
