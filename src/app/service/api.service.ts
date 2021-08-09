import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }

    postAvgle(url) {
        return this.http.get(url).map((el: any) => el.response);
    }
}
