import { Component, HostListener} from "@angular/core";
import { FlashcardRepository } from "../model/flashcard.repository";
import { Flashcard } from "../model/flashcard.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-card-review",
  templateUrl: "./card-review.component.html",
  styleUrls: ["./card-review.component.css"],
})

export class CardReviewComponent {
  screenHeight: number;
  screenWidth: number;
  colLen: number;
  
  constructor(
    private repository: FlashcardRepository,
    private activatedRoute: ActivatedRoute
  ) {
    this.getScreenSize();
    this.colLen = 0;
  }

  getCards(): Flashcard[] {
    return this.repository.getCards();
  }

  updateCards() {
    this.repository.updateCards();
  }

  public trackItem(index: number, item: Flashcard) {
    return item.id;
  }

  showDueDate(flashcard: Flashcard): string {
    return new Date(flashcard.dueDate*1000).toLocaleDateString();
  }

  deleteCard(flashcard: Flashcard) {
    this.repository.deleteCard(flashcard);
    setTimeout(() => this.repository.updateCards(), 100);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
  }


  isSmall(): boolean {
    if(this.screenWidth < 768) {
      return true;
    }
    return false;
  }

  restoreDefault() {
    this.repository.deleteAllCards();
    this.repository.addDefaultCards();
    setTimeout(() => this.repository.updateCards(), 1000);
  }

  deleteAllCards(){
    this.repository.deleteAllCards();
    setTimeout(() => this.repository.updateCards(), 1000);
  }
}