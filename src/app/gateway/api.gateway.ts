import { Observable } from "rxjs";
import { SendEmailRequest } from "../shared/interfaces";

export abstract class ApiGateway {
  
  abstract sendEmail<T>(emailRequest: SendEmailRequest): Observable<T>;
  abstract validateEmail<T>(email: string): Observable<T>;
  abstract validatePhoneNumber<T>(phone: string): Observable<T>;
  
}

