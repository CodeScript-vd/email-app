export const getState = (status: string) =>
  status === 'DELIVERABLE' 
  ? 'valid' : status === 'UNDELIVERABLE'
  ? 'invalid' : status === 'RISKY'
  ? 'risky' : 'unknown';

export const getStateHunter = (status: string) => 
  status === 'valid'
  ? 'valid' : status === 'invalid'
  ? 'invalid' : status === 'webmail'
  ? 'valid' : status === 'disposable'
  ? 'disposable' : 'unknown';

export const getStateXML = (status: string) =>
  status === 'true'
  ? 'valid' : status === 'false'
  ? 'invalid' : 'unknown';

export const getStateApiLayer = (status: string) => 
  status === 'true'
  ? 'valid' : status === 'false'
  ? 'invalid' : 'unknown';

export const getStateZerobounce = (status: string) =>
  status === 'valid'
  ? 'valid' : status === 'invalid'
  ? 'invalid' : status === 'deliverable'
  ? 'valid' : status === 'undeliverable'
  ? 'invalid' : status === 'risky'
  ? 'risky' :'unknown';

export const getStateCaptainVerify = (status: string) => 
  status === 'valid'
  ? 'valid' : status === 'invalid'
  ? 'invalid' : status === 'risky'
  ? 'risky' : 'unknown'