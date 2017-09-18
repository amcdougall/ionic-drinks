/**
 * Created by amcdougall on 9/15/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable()
export class DrinksService {
  public API = 'http://localhost:8080';
  public DRINK_API = this.API + '/drinks';

  constructor(public http: Http) {}

  getDrinks(): Observable<any> {
    return this.http.get(this.API + '/drinks')
      .map((response: Response) => response.json());
  }

  get(id: string) {
    return this.http.get(this.DRINK_API + '/' + id)
      .map((response: Response) => response.json());
  }

  save(drink: any): Observable<any> {
    let result: Observable<Response>;
    if (drink['href']) {
      result = this.http.put(drink.href, drink);
    } else {
      result = this.http.post(this.DRINK_API, drink)
    }
    return result.map((response: Response) => response.json())
      .catch(error => Observable.throw(error));
  }
}
