import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech,TTSOptions } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private tts:TextToSpeech) {

  }

  alert(){
    let options ={
     text:"Hola Buenos dias.",
     locale:"es-CO",
     rate :1
    }    
    this.tts.speak(options)
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

}
