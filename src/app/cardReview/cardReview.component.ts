import { Component, OnInit } from '@angular/core';
import { FlashcardRepository } from '../model/flashcard.repository';
import { Flashcard } from '../model/flashcard.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-review',
  templateUrl: './cardReview.component.html',
  styleUrls: ['./cardReview.component.css']
})
export class CardReviewComponent implements OnInit {
  flashcards: Flashcard[];
  index: number;
  data: any;
  flip: boolean;
  constructor(private repository: FlashcardRepository, private activatedRoute: ActivatedRoute) {
    this.index = 0;
    this.flip = false;
  }

  flipCard() {
    this.flip = true;
  }

  nextCard() {
    if (this.index < this.flashcards.length - 1) {
      this.flip = false;
      this.index += 1;
    }
  }
  ngOnInit() {
    this.data = this.activatedRoute.snapshot.data;
    this.flashcards = this.data.message;
    console.log(this.flashcards);
  }

}
