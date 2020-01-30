import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../model/flashcard.model';
import { FlashcardRepository } from '../model/flashcard.repository';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-srs',
  templateUrl: './card-srs.component.html',
  styleUrls: ['./card-srs.component.css']
})
export class CardSrsComponent implements OnInit {

  flashcards: Flashcard[];
  index: number;
  data: any;
  flip: boolean;
  reviewDone: boolean;

  constructor(private repository: FlashcardRepository, private activatedRoute: ActivatedRoute) {
    this.index = 0;
    this.flip = false;
    this.reviewDone = false;
  }

  flipCard() {
    this.flip = true;
  }
  restartReview() {
    this.index = 0;
    this.reviewDone = false;
  }

  nextCard() {
    if (this.index < this.flashcards.length - 1) {
      this.flip = false;
      this.index += 1;
    }
    else {
      this.reviewDone = true;
    }
  }
  ngOnInit() {
  }
}