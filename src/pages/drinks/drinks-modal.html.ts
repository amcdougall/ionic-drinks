/**
 * Created by amcdougall on 9/15/17.
 */
<ion-header>
  <ion-toolbar>
    <ion-title>
      {{drinks ? 'Drink Details' : 'Add Drink'}}
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios,core">Cancel</span>
        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
  </ion-header>
  <ion-content padding>

    <form #drinkForm="ngForm" (ngSubmit)="save(drinkForm.value)">
      <input type="hidden" name="href" [(ngModel)]="drink.href">

      <ion-row>
        <ion-col>
          <ion-list inset>
            <ion-item>
              <ion-input placeholder="Drink Name" name="name" type="text"
                        required [(ngModel)]="drink.name" #name></ion-input>
            </ion-item>
          </ion-list>
        </ion-col>
      </ion-row>

    <ion-row>
      <ion-col>
        <div *ngIf="error" class="alert alert-danger">{{error}}</div>
          <button ion-button color="primary" full type="submit"
              [disabled]="!drinkForm.form.valid">Save</button>
      </ion-col>
      </ion-row>
      </form>
  </ion-content>
