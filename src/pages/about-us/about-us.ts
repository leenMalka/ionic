import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'about-us',
  templateUrl: 'about-us.html'
})
export class AboutUsComponent {

  relationship:any="aboutUs";
  images = ['1.png', '2.png', '3.jpg', '4.png'];

  constructor(private toast:ToastController) {
  }
  selectedAboutUs(){
    this.relationship='aboutUs';
  }
  selectedVolunteering(){
    this.relationship='volunteering';
  }
  showToast(){
    const toast = this.toast.create({
      message: 'You can also join us... go to register! ',
      duration: 3000,
      position:'middle',
      cssClass: "toast",
    });
    toast.present();
  }

}
