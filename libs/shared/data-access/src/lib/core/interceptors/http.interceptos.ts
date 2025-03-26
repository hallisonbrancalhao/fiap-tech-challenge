import { inject, } from '@angular/core';
import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthFacade } from '../../application';
import { environment } from '../environments/environment.dev';

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authToken = inject(AuthFacade).token$();

  if (req.url.includes('/graphql')) return next(req);

  const newReq = req.clone({
    url: `${environment.apiUrl}${req.url}`,
    headers: req.headers.append('Authorization', `Bearer ${authToken}`),
  });
  return next(newReq);
}
