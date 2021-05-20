import { Injectable } from "@angular/core";
import { Flashcard } from "./flashcard.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class FlashcardRepository {
  public flashcards: Flashcard[];


  constructor(private restDataSource: RestDataSource) {
    this.updateCards();
  }



  getCards(): Flashcard[] {
    return this.flashcards;
  }
  updateCards() {
    this.restDataSource.getCards().subscribe((data) => {
      this.flashcards = data;
    });
  }
  addCard(flashcard: Flashcard) {
    flashcard.easiness = 2.5;
    flashcard.interval = 1;
    flashcard.repetitions = 0;
    flashcard.dueDate = Date.now();
    this.restDataSource.addCard(flashcard).subscribe();
  }

  deleteCard(flashcard: Flashcard) {
    this.restDataSource.deleteCard(flashcard, flashcard.id).subscribe();
  }

  sendRating(flashcard: Flashcard, quality: number) {
    let response: Flashcard;
    console.log(quality);
    return this.restDataSource.sendRating(flashcard, quality);
    // while(response == null) {}
    // console.log(response);
  }
}
