import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController } from 'ionic-angular';
import { DrinksService } from '../../providers/drinks-service';
import { DrinksModalPage } from '../pages/drinks/drinks-modal';

/**
 * Generated class for the DrinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-drinks',
  templateUrl: 'drinks.html',
})
export class DrinksPage {
  private drinks: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public drinksService: DrinksService, public modalCtrl: ModalController) {//
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad DrinksPage');
    this.drinksService.getDrinks().subscribe(drinks => {
      this.drinks = drinks;
    })
  }*/

  openModal(drinkId) {
    let modal = this.modalCtrl.create(DrinkModalPage, drinkId);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewDidLoad())
  }

}
