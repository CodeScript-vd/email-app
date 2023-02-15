import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent {

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

  constructor(private fb: FormBuilder, private emailService: EmailService) { 
    this.sendForm = this.fb.group({
      fromTo: this.fb.control('', [Validators.required]),
      subject: this.fb.control('', [Validators.required]),
      message: this.fb.control('', [Validators.required]),
    });
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
    this.emailService.sendEmail(value).subscribe({
      next: (response) => {
        console.log(response);
        this.sendForm.reset();
        this.successMessage.show = true;
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
