import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable, Provider } from "@angular/core";
import { BehaviorSubject, Observable, catchError, map, of, switchMap, throwError, withLatestFrom } from "rxjs";
import { environment } from '../environments/environment';
import { API_ERROR } from './shared/constants'
import { Router } from "@angular/router";

const apiUrl = environment.apiUrl;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    authService: any;
    constructor(@Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.startsWith('/api')) {
            req = req.clone({
                url: req.url.replace('/api', apiUrl),
                withCredentials: true
            })
        }
        return next.handle(req).pipe(
            catchError(err => {
                return of(err).pipe(withLatestFrom(this.authService.user$), switchMap(([err, user]) => {
                    if (err.status === 401) {
                        if (user!) {
                            this.router.navigate(['/auth/login'])
                        } else {
                            this.router.navigate(['/auth/no-permitions'])
                        }

                    } else {
                        this.apiError.next(err)
                        this.router.navigate(['/error'])
                    }
                    return throwError(() => err);
                })
                )
            })
        )

    }
}
    export const appInterceptorProvider: Provider = {
        provide: HTTP_INTERCEPTORS,
        useClass: AppInterceptor,
        multi: true
    }