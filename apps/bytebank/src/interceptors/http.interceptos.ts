import { inject, } from '@angular/core';
import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.dev';
import { AuthFacade } from '@fiap-tech-challenge/shared-data-access';

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const baseUrl = environment.apiUrl;
  const authToken = inject(AuthFacade).token$();

  if (req.url.includes('/graphql')) return next(req);

  const newReq = req.clone({
    url: `${baseUrl}${req.url}`,
    headers: req.headers.append('Authorization', `Bearer ${authToken}`),
  });
  return next(newReq);
}
