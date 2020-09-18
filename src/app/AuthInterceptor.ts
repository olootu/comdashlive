import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import * as token from './shared/token/general';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!token.jwtToken) {
            return next.handle(req);
        }

        const req1 = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token.jwtToken}`),
        });

        return next.handle(req1);
    }
}
