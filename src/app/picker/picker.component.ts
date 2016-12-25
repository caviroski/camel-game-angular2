import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})
export class PickerComponent implements OnInit {

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

  private haircolorSelected(value: any) {
   console.log('Selected value is: ', value);
  }
}