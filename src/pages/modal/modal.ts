import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
import { DbHttp } from '../../providers/db-http/db-http';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private view:ViewController,public db:DbHttp,) {
  	this.tipo = navParams.get('data');
  	this.id = navParams.get('value');
  	this.navCtrl =  navParams.get('nav');
  }

  escolha(choice:boolean) {

	if(choice){
             this.db.Deletar(this.id,this.tipo).subscribe()
             this.navCtrl.pop()
    }
    this.view.dismiss()
  }
}
