import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable } from 'rxjs';
import { CaptainVerifyService } from 'src/app/services/captain-verify.service';
import { ApiOptions } from '../../../pages/pages.component';
import { AbstractApiService } from '../../../services/abstract-api.service';
import { ApiLayerService } from '../../../services/api-layer.service';
import { EmailableService } from '../../../services/emailable.service';
import { HunterApiService } from '../../../services/hunter-api.service';
import { SendgridService } from '../../../services/sendgrid.service';
import { WhoisXMLApiService } from '../../../services/whois-xmlapi.service';
import { ZerobonceService } from '../../../services/zerobonce.service';

@Injectable({
  providedIn: 'root'
})
export class ProvideApiService {
  api: string = 'sendgrid';
  jsonData?: any;
  private _options$ = new BehaviorSubject<ApiOptions[]>([]);
  options$ = this._options$.asObservable().pipe(delay(100));

  public set options(v : ApiOptions[]) {
    this._options$.next(v);
  }
  
}

export const provideFactory = (provide: ProvideApiService) => {
  const http = inject(HttpClient);
  switch (provide.api) {
    case 'abstract':
      return new AbstractApiService(http);
    case 'sendgrid':
      return new SendgridService(http);
    case 'hunter':
      return new HunterApiService(http);
    case 'whoisxmlapi':
      return new WhoisXMLApiService(http);
    case 'apilayer':
      return new ApiLayerService(http);
    case 'zerobounce':
      return new ZerobonceService(http);
    case 'emailable':
      return new EmailableService(http);
    case 'captainverify':
      return new CaptainVerifyService(http);
    default:
      return new SendgridService(http);
  }
}
