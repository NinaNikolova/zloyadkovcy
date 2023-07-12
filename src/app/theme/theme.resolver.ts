import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { ITheme } from "../shared/interfaces/theme";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ThemeResolver implements Resolve<ITheme | null>{
    constructor(private apiService: ApiService, private router: Router) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ITheme | null| Observable<ITheme> | Promise<ITheme> {
        const themeId = route.params['_id'];
        if (!themeId) {
            this.router.navigate(['/theme/recent']);
            return null;
        }
        return this.apiService.loadTheme(themeId)
    }
}



