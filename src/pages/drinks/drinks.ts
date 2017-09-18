import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController } from 'ionic-angular';
import { DrinksService } from '../../providers/drinks-service';
import { DrinksModalPage } from '../drinks/drinks-modal';
import {Camera} from 'ionic-native';
import shortid from  'shortid';
import {drinkModel} from '../../app/drinkModel';

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinksPage');
    this.drinksService.getDrinks().subscribe(drinks => {
      this.drinks = drinks;
    })
  }

  openModal(drinkId) {
    let modal = this.modalCtrl.create(DrinksModalPage, drinkId);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewDidLoad())
  }

  drinkPic(drinkIndex){

    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      let picId = shortid.generate();
      // imageData is a base64 encoded string
      // this.base64Image = "data:image/jpeg;base64," + imageData;
      this.drinkModel[drinkIndex].currentImage = {
        id: `DRINKJPEG-${this.drinkModel.siteId}-${picId}`,
        contentType:"image/jpeg",
        image:"data:image/jpeg;base64," + imageData,
        fileName : `DRINKJPEG-${this.drinkModel.siteId}-${picId}.jpeg`
      }
    }, (err) => {
      console.log(err);
    });
  }

}
