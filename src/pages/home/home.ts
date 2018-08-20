import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Hero } from '../../hero';
import { HeroService } from '../../heroes.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

heroList:Hero[]=[];
allHeroList:Hero[]=[];
currntUser:Hero=null;

  constructor(public navCtrl: NavController,private service:HeroService,private alertCtrl:AlertController) {
      this.service.getHeroes().subscribe(x=>{this.heroList=x.slice(1,4);this.allHeroList=x});
  }
  openLogin() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'username',
          placeholder: 'User name'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            //cancel
          }
        },
        {
          text: 'Login',
          handler: data => {
          var user=this.allHeroList.find(x=>x.name==data.username && x.password==data.password);
            if (user) {
              this.currntUser=user;
            } else {
              alert.setMessage('Please insert valid user name and password!');
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }
  LogOut(){
    this.currntUser=null;
  }
}
