import { Component, OnInit } from '@angular/core';
import { FlashcardRepository } from '../model/flashcard.repository';
import { Flashcard } from '../model/flashcard.model';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  //private flashcard: Flashcard;

  constructor(private repository: FlashcardRepository) { 
  }
  
  public get flashcard() {
 
    //console.log("xd");
    //console.log(JSON.stringify(this.flashcard));
    return this.repository.getCard();
  }

  ngOnInit() {   

  }

}
