import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  
  login() { 
    if(this.userld && this.password) {
    if (this.userld == 'moni' && this.password == 'moni') {
        this.navCtrl.navigateForward('home')
    } else {
        this.presentToast('Invalid userld or password.')
    }
   } else {
    this.presentToast('Please provide Userld and Password.')
   } 
   } 
async presentToast(message) { 
    const toast = await this.toastController.create({ message: message, duration: 2000); toast.present(); 
    }

}
