import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiGateway } from '../gateway/api.gateway';
import { SendEmailRequest } from '../shared/interfaces';
import { EmailApiResponse } from '../shared/models/email-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class WhoisXMLApiService implements ApiGateway {
  private url = 'https://emailverification.whoisxmlapi.com/api/v2';
  private apiKey = 'at_dwKs4eaErN16n9Uel2lwBPXc9kTeB';
  
  constructor(private http: HttpClient) { }

  sendEmail<T>(emailRequest: SendEmailRequest): Observable<T> {
    throw new Error('Method not implemented.');
  }
  validateEmail<T>(email: string): Observable<T> {
    const endpoint = `${ this.url }?apiKey=${ this.apiKey }&emailAddress=${ email }`;
    return this.http.get<T>(endpoint).pipe(
      map(resp => {
        const { response, status } = new EmailApiResponse(resp);
        return {
          ...response,
          response,
          status
        }
      })
    );
  }
  validatePhoneNumber<T>(phone: string): Observable<T> {
    throw new Error('Method not implemented.');
  }
}
