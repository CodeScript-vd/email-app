import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvideApiService } from '../shared/utils/services/provide-api.service';

export interface ApiOptions {
  value: string;
  name: string;
}

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  loading = false;
  changeApiValue: string = 'sendgrid';
  tab: string = 'send-email';
  optionsApi: ApiOptions[] = [];
  activateRoute: any;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    public provideApi: ProvideApiService,
  ) {}

  ngOnInit(): void {
    console.log(PagesComponent.name, 'CREATE');
    this.changeOptions(this.tab)
    this.router.navigate(['./', this.tab, this.changeApiValue], {relativeTo: this.route});
  }

  changeApi() {
    console.log('fn: ChageApi')
    this.provideApi.api = this.changeApiValue;
    this.router.navigate([this.tab, this.changeApiValue], {relativeTo: this.route});
  }

  changeTab(segment: string) {
    this.tab = segment;
    this.changeOptions(this.tab);
  }

  changeOptions(typeTab: string) {
     switch (typeTab) {
      case 'send-email':
        this.optionsApi = [
          {
            name: 'Sendgrid',
            value: 'sendgrid',
          }
        ];
        break;
      case 'validate-email':
        this.optionsApi = [
          {
            name: 'Abstract',
            value: 'abstract',
          },
          {
            name: 'Hunter',
            value: 'hunter',
          },
          {
            name: 'Whois XML Api',
            value: 'whoisxmlapi',
          },
          {
            name: 'Mailboxlayer',
            value: 'apilayer',
          },
          {
            name: 'Zerobounce',
            value: 'zerobounce',
          },
          {
            name: 'Emailable',
            value: 'emailable',
          },
          {
            name: 'Captain Verify',
            value: 'captainverify',
          }
        ]
        break;
      case 'validate-phone':
        this.optionsApi = [
          {
            name: 'Abstract',
            value: 'abstract',
          },
          {
            name: 'Mailboxlayer',
            value: 'apilayer',
          },
        ] 
        break;    
      default:
        this.optionsApi = [];
        break;
    }
    this.changeApiValue = this.optionsApi[0].value;
    this.changeApi();
  }

}
