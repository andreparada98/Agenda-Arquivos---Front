import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map, Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Authorization } from "../../../models/authorization.model";
import { JwtAuthentication } from "../../../models/jwt.authentication.model";
import { Response } from "../../../models/response";
import { Token } from "../../../models/token";
import { UserDetails } from "../models/user-details.model";


const httpOptions = {
    headers: new HttpHeaders(
        {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
};


@Injectable({providedIn: 'root'})

export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<UserDetails>;
    private currentUser: Observable<UserDetails>

    constructor(
        private http: HttpClient,
        private router: Router
        ){
            this.currentUserSubject = new BehaviorSubject<UserDetails>(JSON.parse(localStorage.getItem('currentUser')));
            this.currentUser = this.currentUserSubject.asObservable();
        }

        public get currentUserValue(): UserDetails {
            return this.currentUserSubject.value
        }


        login(authentication: JwtAuthentication) {
            return this.http.post<Response<Token>>(`${environment.api}auth`, authentication, httpOptions)
                .pipe(map((response: any) => {
                    // login successful if there's a jwt token in the response
                    if (response && response.data.token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        response.userDetails.token = response.data.token;
                        localStorage.setItem('currentUser', JSON.stringify(response.userDetails));
                        this.currentUserSubject.next(response.userDetails);
                        this.carregarPermissions(response.userDetails.authorities);
                    }
    
                    return response.userDetails;
                }));
        }

        carregarPermissions(autorieties: Authorization[]) {
            let permissions = autorieties.map(role => role.authority); 
        }

        logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
            this.router.navigate(['/auth/login']);
        }
    

}