import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
	todo = {}
	value:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	 this.value = navParams.get('data');
  	 console.log(this.value)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }
  logForm() {
	console.log(this.todo)
  }
}
