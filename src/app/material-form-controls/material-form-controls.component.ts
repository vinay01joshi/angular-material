import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'material-form-controls',
  templateUrl: './material-form-controls.component.html',
  styleUrls: ['./material-form-controls.component.css']
})
export class MaterialFormControlsComponent {
  isChecked=true;
  colors = [
    {id:1,name:'Red'},
    {id:2,name:'Green'},
    {id:3,name:'Blue'},
    {id:4,name:'Yellow'},
    {id:5,name:'White'}
  ]
  color = 2;
  minDate = new Date(2017,1,1);
  maxDate = new Date(2017,8,1)
  constructor() { }

  onChange($event){
    console.log($event);
  }

}
