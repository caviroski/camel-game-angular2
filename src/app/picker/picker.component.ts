import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { Slider } from '../modules/Slider';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css'],
  providers: [AppService]
})

export class PickerComponent implements OnInit {

  private sliders:Slider[] = [
    {
      "title": "Age",
      "selectedDefaultValue": 20,
      "min": 14,
      "max": 70
    },
    {
      "title": "Height (cm)",
      "selectedDefaultValue": 175,
      "min": 140,
      "max": 220
    }
  ];

  private haircolors:Array<Object> = [ 
    {type: 'blonde', value: 1}, 
    {type: 'brown', value: 2}, 
    {type: 'black', value: 3}, 
    {type: 'red', value: 4}, 
    {type: 'grey', value: 5}
  ];
  private selectedHaircolor:number = 1;

  private hairlengths:Array<Object> = [ 
    {id: 'lHL', type: 'long', value: 1}, 
    {id: 'mHL', type: 'middle', value: 2}, 
    {id: 'sHL', type: 'short', value: 3}, 
    {id: 'bHL', type: 'bald', value: 4}
  ];
  private hairlengthSelected:number = 1;

  private eyecolors:Array<Object> = [ 
    {id: 'bEC', type: 'blue', value: 1}, 
    {id: 'gEC', type: 'green', value: 2}, 
    {id: 'brEC', type: 'brown', value: 3}, 
    {id: 'grEC', type: 'grey', value: 4}
  ];
  private eyecolorSelected:number = 1;

  private beards:Array<Object> = [ 
    {id: 'sBE', type: 'small', value: 1}, 
    {id: 'mBE', type: 'mustache', value: 2}, 
    {id: 'gBE', type: 'goatee', value: 3}, 
    {id: 'bBE', type: 'big', value: 4}
  ];
  private beardSelected:number = 1;

  private bodys:Array<Object> = [ 
    {id: 'bBD', type: 'big', value: 1}, 
    {id: 'sBD', type: 'small', value: 2}, 
    {id: 'mBD', type: 'middle', value: 3}
  ];
  private bodySelected:number = 1;

  constructor(private appService:AppService) {
  }

  ngOnInit() {
  }

  private haircolorSelected(value: any) {
   this.selectedHaircolor = value;
  }

  private calculate() {
    this.appService.score = this.selectedHaircolor + this.hairlengthSelected + this.eyecolorSelected + this.beardSelected + this.bodySelected;
  }
}