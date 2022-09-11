export enum OTP_TYPE {
    SIGN_UP = 'SIGN_UP',
    ADD_WALLET = 'ADD_WALLET',
    CHANGE_PASS = 'CHANGE_PASS',
    IMPORT_WALLET = 'IMPORT_WALLET',
    CHANGE_EMAIL = 'CHANGE_EMAIL'
  }
  
  export enum STATUS_OTP {
    VERIFIED = 'VERIFIED',
    CANCEL = 'CANCEL',
    WAIT_VERIFY = 'WAIT_VERIFY'
  }
  
  export class OTP_RESPONSE {
    message: string
  }

  export const EXPIRED_CODE = 1000 * 60 * 5
  