import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchmap';

import * as fromApp from '../store/app.reducer';
import * as fromAuth from '../auth/store/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercpted!' , req);
    // const copieReq = req.clone({headers: req.headers.set('', '')});
    return this.store.select('authState')
      .take(1)
      .switchMap((authState: fromAuth.State) => {
        const copieReq = req.clone({params: req.params.set('auth', authState.token)});
        return next.handle(copieReq);
      });
  }
}
