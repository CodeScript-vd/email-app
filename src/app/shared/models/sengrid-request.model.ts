import { SendEmailRequest } from "../interfaces";

export class SendSengridRequest {
  private fromTo: string;
  private subject: string;
  private message: string;


  constructor(private sendRequest: SendEmailRequest) {
    const { fromTo, message, subject } = sendRequest;
    this.fromTo = fromTo;
    this.message = message;
    this.subject = subject;
  }

  get body()  {
    return {
      personalizations: [
          {
              to: [
                  {
                    "email": `${ this.fromTo }`,
                  }
              ],
              "subject": `${ this.subject }`
          }
      ],
      "content": [
          {
              "type": "text/plain",
              "value": `${ this.message }`
          }
      ],
      "from": {
          "email": "vdiaz.2192@gmail.com",
          "name": "Angel"
      }
    }
  }


}