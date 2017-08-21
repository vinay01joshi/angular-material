import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'material-form-controls',
  templateUrl: './material-form-controls.component.html',
  styleUrls: ['./material-form-controls.component.css']
})
export class MaterialFormControlsComponent {
  isChecked=true;
  constructor() { }

  onChange($event){
    console.log($event);
  }

}
