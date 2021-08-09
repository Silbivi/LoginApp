import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import firebase from '@firebase/app'
import '@firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: string="";
  phone: number;
  address: string="";
  email: string="";
  pass: string="";

  constructor(
    public modalCtrl: ModalController,
    public alert: AlertController,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalCtrl.dismiss();
  }

  async register(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.pass).then(
      (data)=>{
        this.showAltert("Register Success!", "Login Please!");
        console.log("Register Success!")
        this.router.navigate(['/welcome'])
        this.modalCtrl.dismiss();
      }).catch((err)=>{
        this.showAltert("Error!", err.message);
        console.log(err);
      })
  }

  async showAltert(header:string, message:string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    })
    await alert.present()
  }

}
