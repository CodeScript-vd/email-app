import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ApiGateway } from 'src/app/gateway/api.gateway';
import { AbstractPhoneResponse } from 'src/app/shared/interfaces/abstractResponse';
import { ProvideApiService, provideFactory } from 'src/app/shared/utils/services/provide-api.service';

@Component({
  selector: 'app-validate-phone',
  templateUrl: './validate-phone.component.html',
  styleUrls: ['./validate-phone.component.scss'],
  providers: [
    {
      provide: ApiGateway, 
      useFactory: provideFactory, 
      deps: [ProvideApiService], 
    }
  ]
})
export class ValidatePhoneComponent implements OnInit, AfterContentInit {

  phone!: string;
  loading = false;
  response?: any;
  
  operator?: string;
  status?: string;

  constructor(
    private apiGateway: ApiGateway,
    private provideApi: ProvideApiService
  ) { }

  ngOnInit(): void {
    console.log(ValidatePhoneComponent.name, 'CREATE');
  }
  
  ngAfterContentInit(): void {
    this.provideApi.jsonData = undefined;  
  }

  send() {
    this.loading = true;
    this.response = undefined;
    this.apiGateway.validatePhoneNumber<AbstractPhoneResponse>(this.phone).subscribe({
      next: (response) => {
        const { valid, carrier } = response;
        this.status = valid ? 'valid' : 'invalid';
        this.operator = carrier;
        this.response = response;
        this.provideApi.jsonData = response;
      },
      error: (err) => {
        this.response = err;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

}
