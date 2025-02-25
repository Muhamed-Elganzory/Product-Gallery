import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import {spinnerInterceptor} from './Core/Interceptors/spinner.interceptor';
import {NgxSpinnerModule} from 'ngx-spinner';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withHashLocation(),
      withViewTransitions(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }),
    ),
    importProvidersFrom(BrowserAnimationsModule, NgxSpinnerModule),
    provideHttpClient(withFetch(), withInterceptors([spinnerInterceptor])),
    provideAnimations(),
  ]
};
