import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService {
    constructor(private http:HttpClient){}
    getHeroes():Observable<any>{
        return this.http.get<any>('./assets/json/heroes.json');
    }
    getComments():Observable<any>{
       return this.http.get<any>('./assets/json/comments.json');
    }
}