import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-buttons',
  templateUrl: './material-buttons.component.html',
  styleUrls: ['./material-buttons.component.css']
})
export class MaterialButtonsComponent implements OnInit {

  catagories = [
    {name: 'Beginner'},
    {name: 'Intermediate'},
    {name: 'Advanced'},
  ];
  constructor() { }

  ngOnInit() {
  }

  selectCatagory(catagory){
    this.catagories
      .filter(c => c !=  catagory)
      .forEach( c=> c['selected'] = false);
    catagory.selected = !catagory.sele;
  }

}
