import { Component} from "@angular/core";
import { FlashcardRepository } from "../model/flashcard.repository";
import { Flashcard } from "../model/flashcard.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-card-review",
  templateUrl: "./card-review.component.html",
  styleUrls: ["./card-review.component.css"],
})

export class CardReviewComponent {
  flashcards: Flashcard[];
  lCol: Flashcard[] = new Array<Flashcard>();
  mCol: Flashcard[] = new Array<Flashcard>();
  rCol: Flashcard[] = new Array<Flashcard>();
  data: any;
  flip: boolean;
  reviewDone: boolean;
  cardIdx: Map<Flashcard, number> = new Map<Flashcard, number>();

  constructor(
    private repository: FlashcardRepository,
    private activatedRoute: ActivatedRoute
  ) {
    this.flip = false;
    this.reviewDone = false;
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

  flipCard() {
    this.flip = true;
  }

  restartReview() {
    this.flip = false;
    this.reviewDone = false;
  }

  showDueDate(flashcard: Flashcard): string {
    return new Date(flashcard.dueDate).toLocaleDateString();
  }

  deleteCard(flashcard: Flashcard) {
    this.repository.deleteCard(flashcard);
    setTimeout(() => this.repository.updateCards(), 100);
  }
}