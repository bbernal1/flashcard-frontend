import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../model/flashcard.model';
import { FlashcardRepository } from '../model/flashcard.repository';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  flashcard: Flashcard;
  constructor(private repository: FlashcardRepository){
    
  }
  addCard(flashcard: Flashcard) {
    this.repository.addCard(flashcard);
    this.repository.updateCards();
  }
  get jsonCard() {return JSON.stringify(this.flashcard);}
  

  ngOnInit() {
    this.flashcard = new Flashcard();
  }

}
