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
  lCol: Flashcard[] = new Array<Flashcard>();
  mCol: Flashcard[] = new Array<Flashcard>();
  rCol: Flashcard[] = new Array<Flashcard>();
  data: any;
  flip: boolean;
  reviewDone: boolean;
  cardIdx: Map<Flashcard,number> = new Map<Flashcard,number>();

  constructor(private repository: FlashcardRepository, private activatedRoute: ActivatedRoute) {
    this.flip = false;
    this.reviewDone = false;

  }
  getCards() :Flashcard[] {
    return this.repository.getCards();
  }
  updateCards(){
    this.repository.updateCards();
  }
  public trackItem (index: number, item: Flashcard) {
    return item.id;
  }
  

  flipCard() {
    this.flip = true;
  }
  restartReview() {
    this.flip = false;
    this.reviewDone = false;
  }
  
  deleteCard(card) {
    console.log("fun called");
    // let idx = this.cardIdx.get(item);
    this.repository.deleteCard(card);
    setTimeout(() => this.repository.updateCards(),50);
     
    //const index = this.flashcards.indexOf(, 0);
    // if (idx > -1) {
    //   this.flashcards.splice(idx, 1);
    // }
    // this.data = this.repository.getCards();
    // this.lCol = new Array<Flashcard>();
    // for (let i = 0; i < this.flashcards.length; i++) {
      
    //   if (i%3 == 0) {
    //     this.lCol.push(this.flashcards[i]);
    //   }
    //   else if (i%3 == 1) {
    //     this.mCol.push(this.flashcards[i]);
    //   }
    //   else {
    //     this.rCol.push(this.flashcards[i]);
    //   }
    // }

  }

  nextCard() {
  }
  ngOnInit() {
    // this.data = this.activatedRoute.snapshot.data;
    // this.flashcards = this.data.message;
    //console.log(this.repository.getCards().length);
    //this.flashcards = this.repository.getCards()
    // for (let i = 0; i < this.flashcards.length; i++) {
    //   this.cardIdx.set(this.flashcards[i],i)
    //   if (i%3 == 0) {
    //     this.lCol.push(this.flashcards[i]);
    //   }
    //   else if (i%3 == 1) {
    //     this.mCol.push(this.flashcards[i]);
    //   }
    //   else {
    //     this.rCol.push(this.flashcards[i]);
    //   }
    // }
    //console.log(this.flashcards);
  }
  // ngDoCheck() {
  //   console.log("ngDoCheck Called");this.repository.getCards();
  // }
}