import { Injectable } from "@angular/core";
import { Flashcard } from "./flashcard.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class FlashcardRepository {
  public flashcards: Flashcard[];
  public orig: string[][];

  constructor(private restDataSource: RestDataSource) {
    this.flashcards = [];
    this.updateCards();
    this.orig = [];

    this.orig[0] = [];
    this.orig[0][0] = "犬";
    this.orig[0][1] = "いぬ";
    this.orig[0][2] = "dog";

    this.orig[1] = [];
    this.orig[1][0] = "猫";
    this.orig[1][1] = "ねこ";
    this.orig[1][2] = "cat";

    this.orig[2] = [];
    this.orig[2][0] = "馬";
    this.orig[2][1] = "うま";
    this.orig[2][2] = "horse";

    this.orig[3] = [];
    this.orig[3][0] = "書館図";
    this.orig[3][1] = "としょかん";
    this.orig[3][2] = "library";

    this.orig[4] = [];
    this.orig[4][0] = "家族";
    this.orig[4][1] = "かぞく";
    this.orig[4][2] = "family";

    this.orig[5] = [];
    this.orig[5][0] = "女の子";
    this.orig[5][1] = "おんなのこ";
    this.orig[5][2] = "girl";

    this.orig[6] = [];
    this.orig[6][0] = "男の子";
    this.orig[6][1] = "おとこのこ";
    this.orig[6][2] = "boy";
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
  }
  deleteAllCards() {
    console.log("deleting");
    for (let idx = 0; idx < this.flashcards.length; idx++) {
      this.deleteCard(this.flashcards[idx]);
    }
  }
  addDefaultCards() {
    console.log("adding");
    for (let i = 0; i < 7; i++) {
      let flashcard: Flashcard = new Flashcard();
      flashcard.word = this.orig[i][0];
      flashcard.reading = this.orig[i][1];
      flashcard.translation = this.orig[i][2];
      this.flashcards[i] = flashcard;
      this.restDataSource.addCard(flashcard).subscribe();
    }
  }
}