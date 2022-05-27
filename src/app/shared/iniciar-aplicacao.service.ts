import { Injectable } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { from } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Authorization } from '../models/authorization.model';
import { UserDetails } from '../pages/authentication/models/user-details.model';
import { permission } from './enum/permission.enum';


declare var window: any;

@Injectable()
export class IniciarAplicacaoService {

    private currentUserSubject: BehaviorSubject<UserDetails>;

    constructor(
        private _permissionsService: NgxPermissionsService) {
        this.currentUserSubject = new BehaviorSubject<UserDetails>(JSON.parse(localStorage.getItem('currentUser')));
    }

    async consultarDadosIniciaisAplicacao(): Promise<any> {
        if (this.currentUserSubject.value) {
            console.log(this.currentUserSubject.value)
            let autorieties: Authorization[] = this.currentUserSubject.value.authorities
            let permissions = autorieties.map(role => role.authority);
            this._permissionsService.loadPermissions(permissions);
        } else {
            this._permissionsService.loadPermissions([permission.NO_PERMISSION]);
        }
        return this._permissionsService.permissions$;
    }

    public initializeEnvironment(): Promise<any> {
        return from(
            fetch('assets/app-config.json').then(function(response) {
                console.log('fetchRes:',response)
                let value = response.json();
                return value;
            })
        ).pipe(
            map((config: {[key:string]: string}) => {
                window.config = config;
                return config;
        })).toPromise();
      }
}