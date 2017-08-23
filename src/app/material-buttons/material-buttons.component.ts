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
  progress=0;
  timer;
  constructor() {
     this.timer = setInterval(()=> {
      this.progress++;
      if(this.progress ==100) clearInterval(this.timer)        
    },20)
   }

  ngOnInit() {
  }

  selectCatagory(catagory){
    this.catagories
      .filter(c => c !=  catagory)
      .forEach( c=> c['selected'] = false);
    catagory.selected = !catagory.sele;
  }

}
