import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendEmailComponent } from './pages/send-email/send-email.component';

const routes: Routes = [
  {
    path: 'sendEmail',
    component: SendEmailComponent,
  },
  {
    path: '**',
    redirectTo: 'sendEmail',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
