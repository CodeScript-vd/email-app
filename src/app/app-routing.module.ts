import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { SendEmailComponent } from './pages/send-email/send-email.component';
import { ValidateEmailComponent } from './pages/validate-email/validate-email.component';
import { ValidatePhoneComponent } from './pages/validate-phone/validate-phone.component';

const routes: Routes = [
  {
    path: 'api-verify',
    component: PagesComponent,
    children: [
      {
        path: 'send-email/:api',
        component: SendEmailComponent,
        data: {doNotReuse: true},
        title: 'Send Email'
      },
      {
        path: 'validate-phone/:api',
        component: ValidatePhoneComponent,
        data: {doNotReuse: true},
        title: 'Validate Phone',
      },
      {
        path: 'validate-email/:api',
        component: ValidateEmailComponent,
        data: {doNotReuse: true},
        title: 'Validate Email'
      },
      {
        path: 'send-email',
        component: SendEmailComponent,
      },
      {
        path: 'validate-phone',
        component: ValidatePhoneComponent,
      },
      {
        path: 'validate-email',
        component: ValidateEmailComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'api-verify',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
