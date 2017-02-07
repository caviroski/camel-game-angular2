import { Component, OnInit, Input } from '@angular/core';

import { AppService } from '../../app.service';
import { Slider } from '../../modules/Slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [AppService]
})

export class SliderComponent implements OnInit {

  @Input() slider:Slider;
  private selectedAge:number;

  constructor(private appService:AppService) { 

  }

  ngOnInit() {

  }

  private selectedValue(value: any) {
    console.log('value ', value);
    this.selectedAge = value;
  }

}