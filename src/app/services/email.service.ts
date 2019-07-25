import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

// A service is like a class that recycles functionality
@Injectable({
    providedIn: 'root'
})
export class EmailService {
    constructor(private readonly rest: RestService, private readonly auth: AuthService) {}

    // A Service method
    getEmailsByUserId() {
        // calling the get method from RestService to make an HTTPRequest
        // and calling the getUserId method from AuthService to verify that there exists a user
        // in the cloud database from which RestService is making the request to 
        return this.rest.get(environment.apiURL + '/emails?/userId=' + this.auth.getUserId());
    }
}