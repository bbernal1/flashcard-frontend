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
  data: any;
  flip: boolean;
  reviewDone: boolean;

  constructor(private repository: FlashcardRepository, private activatedRoute: ActivatedRoute) {
    this.flip = false;
    this.reviewDone = false;
  }

  flipCard() {
    this.flip = true;
  }
  restartReview() {
    this.flip = false;
    this.reviewDone = false;
  }

  nextCard() {
  }
  ngOnInit() {
    this.data = this.activatedRoute.snapshot.data;
    this.flashcards = this.data.message;
    console.log(this.flashcards);
  }

}
