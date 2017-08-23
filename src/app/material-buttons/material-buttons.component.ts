import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-material-buttons',
  templateUrl: './material-buttons.component.html',
  styleUrls: ['./material-buttons.component.css']
})
export class MaterialButtonsComponent {
  catagories = [
    {name: 'Beginner'},
    {name: 'Intermediate'},
    {name: 'Advanced'},
  ];
  progress=0;
  timer;
  isLoading= false;
  constructor() {
     this.timer = setInterval(()=> {
      this.progress++;
      if(this.progress ==100) clearInterval(this.timer)        
    },20);

    this.isLoading = true;
    this.getCoures()
      .subscribe(x=> this.isLoading = false)

  }
    
  selectCatagory(catagory){
    this.catagories
      .filter(c => c !=  catagory)
      .forEach( c=> c['selected'] = false);
    catagory.selected = !catagory.sele;
  }

  getCoures() {
     return Observable.timer(2000);             
  }

}
