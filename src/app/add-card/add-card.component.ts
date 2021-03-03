import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../model/flashcard.model';
import { FlashcardRepository } from '../model/flashcard.repository';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  newCard: Flashcard;
  addCard(newCard: Flashcard): Flashcard {
    return null;
  }
  get jsonCard() {return JSON.stringify(this.newCard);}
  constructor() { }

  ngOnInit() {
    this.newCard = new Flashcard();
  }

}
