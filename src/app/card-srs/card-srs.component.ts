import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../model/flashcard.model';
import { FlashcardRepository } from '../model/flashcard.repository';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-srs',
  templateUrl: './card-srs.component.html',
  styleUrls: ['./card-srs.component.css']
})
export class CardSrsComponent implements OnInit{

  flashcards: Flashcard[];
  index: number;
  data: any;
  flip: boolean;

  rated: boolean;
  reviewDone: boolean;
  
  dueDate: number;
  interval: number;
  constructor(private repository: FlashcardRepository, private activatedRoute: ActivatedRoute) {
    this.index = 0;
    this.flip = false;
    this.reviewDone = false;
    setTimeout(() => this.getCards(),1);
  }

  test() {
    console.log(this.flashcards.toString())
  }
  
  xd() {
    return this.repository.getCards();
  }

  getCards() {
    this.flashcards = this.repository.getCards();
  }

  flipCard() {
    this.flip = true;
  }

  restartReview() {
    this.index = 0;
    this.flip = false;
    this.rated = false;
    this.reviewDone = false;
  }

  nextCard() {
    if (this.index < this.flashcards.length - 1) {
      this.rated = false;
      this.flip = false;
      this.index += 1;
    }
    else {
      this.reviewDone = true;
    }
  }

  sendRating(event) {
    this.rated = true;
    this.repository.sendRating(this.flashcards[this.index], event.target.value).subscribe( (data) =>
    {  this.dueDate = data.dueDate;
      this.interval = data.interval;
    })

  }

  ngOnInit() {
    this.flashcards = this.data.message;
    this.dueDate = this.flashcards[this.index].dueDate;
  }
}