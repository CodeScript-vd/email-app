import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiGateway } from 'src/app/gateway/api.gateway';
import { ProvideApiService, provideFactory } from 'src/app/shared/utils/services/provide-api.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
  providers: [
    {
      provide: ApiGateway, 
      useFactory: provideFactory, 
      deps: [ProvideApiService]
    }
  ]
})
export class SendEmailComponent implements OnInit, AfterContentInit {

  sendForm: FormGroup = this.fb.group({});
  errorMessage = {
    show: false,
    message: '',
  };
  successMessage = {
    show: false,
    message: 'Se envió correctamente',
  }

  loading = false;

  constructor(
    private fb: FormBuilder, 
    private apiGateay: ApiGateway, 
    public provideApi: ProvideApiService,
  ) { 
    this.sendForm = this.fb.group({
      fromTo: this.fb.control('', [Validators.required]),
      subject: this.fb.control('', [Validators.required]),
      message: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    console.log(SendEmailComponent.name, 'CREATE');
  }
  
  ngAfterContentInit(): void {
    this.provideApi.jsonData = undefined;
  }

  send(): void {
    if (this.sendForm.invalid) {
      this.errorMessage.show = true;
      this.errorMessage.message = 'Completar campos';
      console.error('Error Message');
      return;
    }
    this.loading = true;
    const { value } = this.sendForm;
    this.sendForm.disable();
    this.apiGateay.sendEmail(value).subscribe({
      next: (response) => {
        this.sendForm.reset();
        this.successMessage.show = true;
        this.provideApi.jsonData = response;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.loading = false;
        this.sendForm.enable();
      }
    });
  }

}
