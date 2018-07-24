import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {

  public items:any;


  constructor(public navCtrl: NavController, public http: HttpClient) {
this.getData();
  }

  getData(){
    let url = 'https://firebase.lyfx.co/adventures-lab';
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items = result;
    })
    
    

  }

}
