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

  constructor(private repository: FlashcardRepository, private actr: ActivatedRoute) {
    // this.actr.data.map(data => data.cres.json()).subscribe(res) => {console.log(res)});
    this.getFlashcards(); 

  
  }

  // public get flashcards() {
  //   return this.repository.getCards();
  //   //return this.flashcards != null;
  // }

  public get hasCards() {
    return this.flashcards != null;
  }
  public getFlashcards(){
    this.flashcards =  this.repository.getCards();
     console.log(JSON.stringify(this.flashcards));
  }

  ngOnInit() {
    console.log("Copmponent initiated");
  }

}
