import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendEmailComponent } from './pages/send-email/send-email.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './pages/pages.component';
import { ValidateEmailComponent } from './pages/validate-email/validate-email.component';
import { ValidatePhoneComponent } from './pages/validate-phone/validate-phone.component';
import { MatTabsModule } from "@angular/material/tabs";
import { MatChipsModule } from "@angular/material/chips";
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './shared/utils/services/custom-reuse-strategy';
import { NgxJsonViewerModule } from "ngx-json-viewer";

@NgModule({
  declarations: [
    AppComponent,
    SendEmailComponent,
    ToastComponent,
    PagesComponent,
    ValidateEmailComponent,
    ValidatePhoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatChipsModule,
    NgxJsonViewerModule,
  ],
  providers: [
    {
      provide: RouteReuseStrategy, useClass: CustomReuseStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
