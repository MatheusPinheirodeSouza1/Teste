import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map' ;
import {Observable} from 'rxjs/Observable';


@Injectable()
export class DbHttp {
  constructor(public http: Http) {
  } 

  query(): Observable<Array<any>>{
  	return this.http.get('http://localhost:3000/restaurante').map(response => response.json());
  }
}
