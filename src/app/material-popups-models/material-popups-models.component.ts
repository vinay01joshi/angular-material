import { EditCourseComponent } from './../edit-course/edit-course.component';
import { Component, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material";

@Component({
  selector: 'app-material-popups-models',
  templateUrl: './material-popups-models.component.html',
  styleUrls: ['./material-popups-models.component.css']
})
export class MaterialPopupsModelsComponent implements OnInit {

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(EditCourseComponent,{
      data: {
        courseId: 1,
        name: 'Angular-2-4'
      }
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }

}
