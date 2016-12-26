import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})

export class PickerComponent implements OnInit {

  private age:any = {minAge: 14, maxAge: 70};
  private selectedAge:string = '20';

  private height:any = {minHeight: 140, maxHeight: 220};
  private selectedHeight:string = '175';

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
  private hairlengthSelected:number = 2;

  private beards:Array<Object> = [ 
    {id: 'sBE', type: 'small', value: 1}, 
    {id: 'mBE', type: 'mustache', value: 2}, 
    {id: 'gBE', type: 'goatee', value: 3}, 
    {id: 'bBE', type: 'big', value: 4}
  ];
  private beardSelected:number = 2;

  private bodys:Array<Object> = [ 
    {id: 'bBD', type: 'big', value: 1}, 
    {id: 'sBD', type: 'small', value: 2}, 
    {id: 'mBD', type: 'middle', value: 3}
  ];
  private bodySelected:number = 2;

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
   this.selectedHaircolor = value;
  }

  private aaa(value:any){
    console.log('aaaa ',value);
    console.log('aaaa ',this.hairlengthSelected);
  }
}