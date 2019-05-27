import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  public teste:string = "Bem vindo"
  constructor(public navCtrl: NavController, private actionSheetController:ActionSheetController) {

  }
 async presentActionSheet(tipo:string) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Criar',
        role: 'destructive',
        icon: 'md-add',
        handler: () => {
         this.navCtrl.push('CreatePage',{
      data: tipo
});
        }
      }, {
        text: 'Listar',
        icon: 'md-build',
        handler: () => {
          console.log(tipo);
        }
      }, ]
    });
    await actionSheet.present();
  }
}
