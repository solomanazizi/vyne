import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  handleError(error: any) {

    if (error.hasOwnProperty('type')) {
      switch (error.type) {
        case 'warn':
          console.warn('Warning', error.message);
          break;
        case 'error':
          console.error('Error', error.message);
          break;
        default:
          console.error(error);
      }
    }
  }
}
