import { Component, OnInit } from '@angular/core';
import { FlashcardRepository } from '../model/flashcard.repository';
import { Flashcard } from '../model/flashcard.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.css']
})
export class CardReviewComponent implements OnInit {
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
    this.flip = false;
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
    this.data = this.activatedRoute.snapshot.data;
    this.flashcards = this.data.message;
    console.log(this.flashcards);
  }

}
