import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiGateway } from '../gateway/api.gateway';
import { SendEmailRequest } from '../shared/interfaces';
import { EmailApiResponse } from '../shared/models/email-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiLayerService implements ApiGateway {
  private apiKey = '0Gu6nq6dgdMvZYw2ffSeBN5F8Aun6pMs';
  private url = 'https://api.apilayer.com';
  private header: HttpHeaders = new HttpHeaders({
    'apikey': `${ this.apiKey }`,
  });

  constructor(private http: HttpClient) { }

  sendEmail<T>(emailRequest: SendEmailRequest): Observable<T> {
    throw new Error('Method not implemented.');
  }
  validateEmail<T>(email: string): Observable<T> {
    const endpoint = `${ this.url }/email_verification/${ email }`;
    return this.http.get<T>(endpoint, { headers: this.header }).pipe(
      map(resp => {
        const { status, response, autocorrect } = new EmailApiResponse(resp);
        return {
          ...response,
          response,
          status,
          autocorrect,
        }
      })
    );
  }
  validatePhoneNumber<T>(phone: string): Observable<T> {
    const endpoint = `${ this.url }/number_verification/validate?number=${ phone }`;
    return this.http.get<T>(endpoint, { headers: this.header });
  }
}
