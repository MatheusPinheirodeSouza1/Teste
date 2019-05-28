import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const res = 'http://localhost:3000/restaurante';

@Injectable()
export class DbHttp {
  constructor(public http: HttpClient) {
  } 
	public retorno:any;
  query() {
  	return this.http.get(res);
  }

  Pesquisar(aux:String){
  	return this.http.get(res+"/"+aux);
  }	
  Deletar(aux:String){
  	console.log(res+"/delete/"+aux)
  	return this.http.get(res+"/delete/"+aux)
  }
}
