import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbHttp } from '../../providers/db-http/db-http';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  testes:any
	todo = {}
	data:String;
  id:String;
  tipo:String;
  constructor(public navCtrl: NavController, public db:DbHttp,public navParams: NavParams) {
  	 this.data = navParams.get('data');
     this.id = navParams.get('value');
     if(this.id==""){
       this.tipo = "Cadastrar"
     }else{
       this.tipo = "Editar"
       db.Pesquisar(this.id).subscribe(result => {this.testes = result});
     }
  }

  logForm() {
	  console.log(this.todo)
  }

}
