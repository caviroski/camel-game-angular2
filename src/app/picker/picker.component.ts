import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})

export class PickerComponent implements OnInit {

  private age: any = {minAge: 14, maxAge: 70};
  private selectedAge: string = '20';

  private height: any = {minHeight: 140, maxHeight: 220};
  private selectedHeight: string = '175';

  private haircolors: Array<any> = [ 
    {type: 'blonde', value: 1}, 
    {type: 'brown', value: 2}, 
    {type: 'black', value: 3}, 
    {type: 'red', value: 4}, 
    {type: 'grey', value: 5}
  ];

  constructor() { }

  ngOnInit() {
  }

  private ageSelected(value: any) {
    this.selectedAge = value;
  }

  private heightSelected(value: any) {
    this.selectedHeight = value;
  }

  private haircolorSelected(value: any) {
   console.log('Selected value is: ', value);
  }


}