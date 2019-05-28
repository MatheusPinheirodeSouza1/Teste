import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbHttp } from '../../providers/db-http/db-http';
import { ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage{
  restaurantes:any
  value;

  constructor(public navCtrl: NavController, public navParams: NavParams,public db:DbHttp,private actionSheetController:ActionSheetController) {
  	this.value = navParams.get('data');
  }

  ionViewDidLoad() {
    this.db.query().subscribe(result => {this.restaurantes = result});
  }

  async presentActionSheet(tipo:String,id:any) {
  	console.log(id.toString())
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
           this.navCtrl.push('ListPage',{value: id});
        }
      }, ]
    });
    await actionSheet.present();
  }

}
