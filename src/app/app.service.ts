import { Injectable } from '@angular/core';

import { SliderComponent } from './picker/slider/slider.component'

@Injectable()
export class AppService {

    public score:number = 33;
    public ageSlider:SliderComponent;

}