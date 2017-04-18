import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { UserApi } from "abs/users/user-api";
import { Router } from "@angular/router";

@Injectable()
export class UserService implements UserApi {
    isAuthenticated = false;

    user_name: string;

    constructor(private router: Router) {

    }

    signIn(username:string, password: string, rememberMe: boolean): Observable<any> {
        console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
        this.isAuthenticated = true;
        this.user_name = username;
        return Observable.of({}).delay(2000);
        // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Invalid User Name and/or Password'));        
    }

    signOut() : Observable<any> {
        this.isAuthenticated = false;
        this.router.navigate(['/signin']);
        return Observable.of({});
    }
}