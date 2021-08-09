import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

import firebase from '@firebase/app';
import '@firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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

  async login(){
    firebase.auth().signInWithEmailAndPassword(this.email, this.pass).then(
      (data)=>{
        this.showAltert("Login Success!", "Happy Shopping!");
        console.log("Login Success!");
        this.router.navigate(['/home']);
        this.modalCtrl.dismiss();
      }).catch(()=>{
        this.showAltert("Error!", "Please Check Your Email and Password!");
        console.log("Login Failed!");
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
