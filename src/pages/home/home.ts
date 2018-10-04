import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech,TTSOptions } from '@ionic-native/text-to-speech';
import { WheelSelector } from '@ionic-native/wheel-selector';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   jsonData = {
    numbers: [
     { description: "1" },
      { description: "2" },
      { description: "3" },
      { description: "4" },
      { description: "5" },
      { description: "6" },
      { description: "7" },
      { description: "8" },
      { description: "9" },
      { description: "10" },
      { description: "11" },
      { description: "12" }
    ],
    fruits: [
      { description: "Apple" },
      { description: "Banana" },
      { description: "Tangerine" }
    ],
    firstNames: [
      { name: "Fred", id: '1' },
      { name: "Jane", id: '2' },
      { name: "Bob", id: '3' },
      { name: "Earl", id: '4' },
      { name: "Eunice", id: '5' }
    ],
    lastNames: [
      { name: "Johnson", id: '100' },
      { name: "Doe", id: '101' },
      { name: "Kinishiwa", id: '102' },
      { name: "Gordon", id: '103' },
      { name: "Smith", id: '104' }
    ]
  };
  
  constructor(public navCtrl: NavController,private tts:TextToSpeech,private selector: WheelSelector) {
    
  }


  /////////////////////////// WheelSelector ////////////////////////
  selectANumber() {
  
    this.selector.show({
      title: "How Many?",
      items: [
        
        this.jsonData.numbers
      ],
    }).then(
      result => {
        alert(result[0].description + ' at index: ' + result[0].index)
        console.log(result[0].description + ' at index: ' + result[0].index);
      },
      err => console.log('Error: ', err)
      );
  }

  selectFruit() {
    
    this.selector.show({
      title: "How Much?",
      items: [
        this.jsonData.numbers, this.jsonData.fruits
      ],
      positiveButtonText: "Ok",
      negativeButtonText: "Nope",
      // defaultItems: [
      //   {index:0, value: jsonData.numbers[2].description},
      //   {index: 1, value: jsonData.fruits[3].description}
      // ]
    }).then(
      result => {
        alert(result[0].description + ' ' + result[1].description),
        console.log(result[0].description + ' ' + result[1].description);
      },
      err => console.log('Error: ' + JSON.stringify(err))
      );
  }
  /////////////////////////// End Wheel selector ////////////////////////



  /////////////////////////// Text to speech ////////////////////////
  alert(){
    let options:TTSOptions ={
     text:"Hola Buenos dias.",
     locale:"es-CO",
     rate :1
    }    
    this.tts.speak(options)
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }
 /////////////////////////// end Text to speech ////////////////////////

 

}
