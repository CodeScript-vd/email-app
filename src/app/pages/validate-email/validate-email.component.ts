import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ApiGateway } from 'src/app/gateway/api.gateway';
import { AbstractEmailResponse } from 'src/app/shared/interfaces/abstractResponse';
import { EmailApiResponse } from 'src/app/shared/models/email-api-response.model';
import { ProvideApiService, provideFactory } from 'src/app/shared/utils/services/provide-api.service';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrls: ['./validate-email.component.scss'],
  providers: [
    {
      provide: ApiGateway, 
      useFactory: provideFactory, 
      deps: [ProvideApiService],
    }
  ],
})
export class ValidateEmailComponent implements OnInit, AfterContentInit {

  constructor(
    private apiGateway: ApiGateway, 
    private provideApi: ProvideApiService
  ) { }

  email!: string;
  loading = false;
  response?: AbstractEmailResponse;
  chipColor?: string;
  status?: string;
  coincidence?: string;

  ngOnInit(): void {
    console.log(ValidateEmailComponent.name, 'CREATE');
  }
  
  ngAfterContentInit(): void {
    this.provideApi.jsonData = undefined;
  }

  send() {
    if (!this.email) return;
    this.response = undefined;
    this.loading = true;
    this.apiGateway.validateEmail<EmailApiResponse>(this.email).subscribe(
      {
        next: (resp) => {
          const { autocorrect, status, response } = resp;
          this.coincidence = autocorrect;
          this.provideApi.jsonData = response;
          this.status   = status;
          this.response = response; 
        },
        error: (err) => {
            this.response = err;
        },
        complete: () => {
            this.loading = false;
        },
      },
    );
  }

}
