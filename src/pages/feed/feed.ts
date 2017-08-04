import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
   
  public feed_obj = {
    titulo: "Reinaldo Ribeiro",
    data: "November 5, 1955",
    descricao: "Este é o aplicativo mais legal!!!",
    qtde_likes: 12,
    qtde_comments: 4,
    time_comment: "12h ago"
  }
  
  public nome_usuario:string = "Reinaldo Ribeiro do código";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number):number {
    return num1 + num2;  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
