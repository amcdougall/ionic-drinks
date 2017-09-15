/**
 * Created by amcdougall on 9/15/17.
 */

import { DrinksService } from '../../providers/drinks-service';
import { Component, ViewChild } from '@angular/core';
import { NavParams, ViewController, ToastController, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './drinks-modal.html'
})
export class DrinksModalPage {
  @ViewChild('name') name;
  beer: any = {};
  error: any;

  constructor(public drinksService: DrinksService,
              public params: NavParams,
              public viewCtrl: ViewController,
              public toastCtrl: ToastController,
              public navCtrl: NavController) {
    if (this.params.data.id) {
      this.drinksService.get(this.params.get('id')).subscribe(drinks => {
        this.drinks = drinks;
        this.drinks.href = drinks._links.self.href;

      });
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  save(form: NgForm) {
    let update: boolean = form['href'];
    this.drinksService.save(form).subscribe(result => {
      let toast = this.toastCtrl.create({
        message: 'Drinks "' + form.name + '" ' + ((update) ? 'updated' : 'added') + '.',
        duration: 2000
      });
      toast.present();
      this.dismiss();
    }, error => this.error = error)
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.name.setFocus();
    },150);
  }
}
