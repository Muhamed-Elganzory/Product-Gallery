import { HttpInterceptorFn } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import {inject} from '@angular/core';
import {finalize} from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  const loadingSpinner: NgxSpinnerService = inject(NgxSpinnerService);

  /**
   * Loaded the spinner when the request to fetch data from an API
   */
  loadingSpinner.show('loadingSpinner')
  return next(req).pipe(finalize(() => {
    loadingSpinner.hide('loadingSpinner');
  }));
};
