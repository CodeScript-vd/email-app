import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendEmailComponent } from './pages/send-email/send-email.component';
import { EmailService } from './services/email.service';
import { ToastComponent } from './shared/components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    SendEmailComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
