import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Flashcard } from "../model/flashcard.model";
import { FlashcardRepository } from "../model/flashcard.repository";

@Component({
  selector: "app-add-card",
  templateUrl: "./add-card.component.html",
  styleUrls: ["./add-card.component.css"],
})
export class AddCardComponent{
  flashcard: Flashcard;
  editing: boolean;

  constructor(
    private repository: FlashcardRepository,
    activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.flashcard = new Flashcard();
    this.editing = activeRoute.snapshot.params["mode"] == "edit";

    let id = activeRoute.snapshot.params["id"];
    if (id != null) {
      
      let word = activeRoute.snapshot.params["word"];
      let reading = activeRoute.snapshot.params["reading"];
      let translation = activeRoute.snapshot.params["translation"];
      if (word != null && reading != null && translation != null) {

        this.flashcard.id = id;
        this.flashcard.word = word;
        this.flashcard.reading = reading;
        this.flashcard.translation = translation;
      }
    }
  }
  addCard(flashcard: Flashcard) {
    this.repository.addCard(flashcard);
    setTimeout(() => this.repository.updateCards(),1000);
    this.router.navigateByUrl("/home");
  }
}