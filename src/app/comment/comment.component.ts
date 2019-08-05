import { Component, OnInit } from '@angular/core';
import { FillPipe } from './fill.pipe';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  nbEmptyStars:number = 0;
  comment:{
    title:"J'ai livré pour vous",
    description:"J'adore l'idée de rentabiliser mes voyages. Imen a été réactive, ponctuelle et super sympa.",
    name:"Valérie",
    nbStars:5
  }

  constructor() { }

  getCommentStars(){
    if(this.comment.nbStars<5){
      this.nbEmptyStars = 5 - this.comment.nbStars;
    }
    return this.comment.nbStars;
  }

  ngOnInit() {

  }

}