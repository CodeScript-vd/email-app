import { getState, getStateApiLayer, getStateCaptainVerify, getStateHunter, getStateXML, getStateZerobounce } from "../utils/helpers";

export class EmailApiResponse {
  status?: string;
  autocorrect?: string;
  response;
  constructor(response: any) {
    const { 
      deliverability, 
      autocorrect, 
      did_you_mean, 
      data, smtpCheck, 
      is_deliverable,
      status,
      state
    } = response;
    this.status = 
      deliverability && getState(deliverability)
      || data?.status && getStateHunter(data.status)
      || smtpCheck && getStateXML(smtpCheck)
      || status && getStateZerobounce(status)
      || state && getStateZerobounce(state)
      || state && getStateCaptainVerify(state)
      || is_deliverable + '' && getStateApiLayer(is_deliverable + '')

    this.autocorrect = autocorrect || did_you_mean;
    this.response = response;
  }
}
