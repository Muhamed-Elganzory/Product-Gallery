import { HttpInterceptorFn } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import {inject} from '@angular/core';
import {finalize} from 'rxjs';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const spinner: NgxSpinnerService = inject(NgxSpinnerService);

  spinner.show('spinner')
  return next(req).pipe(finalize(() => {
    spinner.hide('spinner');
  }));
};
