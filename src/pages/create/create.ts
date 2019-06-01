import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbHttp } from '../../providers/db-http/db-http';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
	todo = {}
	data:String;
  id:String;
  tipo:boolean;
  constructor(public navCtrl: NavController, public db:DbHttp,public navParams: NavParams) {
  	 this.data = navParams.get('data');
     this.id = navParams.get('value');
     if(this.id ==""){
       this.tipo = true
     }else{
       this.tipo = false
       this.todo['Id'] = this.id
     }
  }

  logForm() {
    if(this.tipo){
      if(this.data == '1'){
        this.db.CreateRestaurante(this.todo).subscribe()
      }
      else if(this.data == '2'){
        this.db.CreateMenu(this.todo).subscribe()
      }
      else if(this.data == '3'){
        this.db.CreateReview(this.todo).subscribe()
      }
      else if(this.data == '4'){
        this.db.CreateOrder(this.todo).subscribe()
      }
      this.navCtrl.pop();
    }else{
      if(this.data == '1'){
        this.db.EditarRestaurante(this.todo).subscribe()
      }
      else if(this.data == '2'){
        this.db.EditarMenu(this.todo).subscribe()
      }
      else if(this.data == '3'){
        this.db.EditarReview(this.todo).subscribe()
      }
      else if(this.data == '4'){
        this.db.EditarOrder(this.todo).subscribe()
      }
       this.navCtrl.pop();
       this.navCtrl.pop();
       this.navCtrl.push('ListPage',{data: this.data});
    }

   }

}
