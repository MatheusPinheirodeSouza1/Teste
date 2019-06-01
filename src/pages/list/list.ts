import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,Modal } from 'ionic-angular';
import { DbHttp } from '../../providers/db-http/db-http';
import { ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage{
  elementos:any
  value;
  escolha:any
  constructor(public navCtrl: NavController, public navParams: NavParams,public db:DbHttp,private actionSheetController:ActionSheetController, private modalController:ModalController) {
  	this.value = navParams.get('data');
    if(this.value == '1'){
      this.db.ListarRestaurante().subscribe(result => {this.elementos = result});
    }
    else if(this.value == '2'){
      this.db.ListarMenu().subscribe(result => {this.elementos = result});
    }
    else if(this.value == '3'){
      this.db.ListarReview().subscribe(result => {this.elementos = result});
    }
    else if(this.value == '4'){
      console.log(this.value)
      this.db.ListarOrder().subscribe(result => {this.elementos = result});
    }
  }
  async presentActionSheet(tipo:String,id:any) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Editar',
        role: 'destructive',
        icon: 'md-build',
        handler: () => {
         this.navCtrl.push('CreatePage',{data: tipo,value: id});
        }
      }, {
        text: 'Excluir',
        icon: 'md-trash',
        handler: () => {
           const mymodal: Modal = this.modalController.create('ModalPage',{data: tipo,value: id,nav: this.navCtrl})
           mymodal.present()
        }
      }, ]
    });
    await actionSheet.present();
  }
  deletar(){

  }

}
