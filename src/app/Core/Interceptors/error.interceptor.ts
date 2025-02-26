import {HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from 'rxjs';
import {inject} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const toastr: ToastrService = inject(ToastrService);

  /**
   * load interceptor when the request returns an error while fetching data from an API
   * Catching the error and displaying it as a notification using ToastrService
   * @param error - The error object caught during the HTTP request
   * @returns - Throws the error to be handled by other interceptors or subscribers
   */
  return next(req).pipe(catchError((error: any) => {
    toastr.error(error.name + ' 404', '', {
      progressBar: true,
      timeOut: 2000,
    });
    return throwError(() => error);
  }));
};
