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

  data: any;

  constructor(
    private repository: FlashcardRepository,
    private activatedRoute: ActivatedRoute
  ) {}

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
}