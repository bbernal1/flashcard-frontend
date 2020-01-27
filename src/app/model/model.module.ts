import { NgModule } from "@angular/core";
import { Flashcard } from "./flashcard.model";
import { FlashcardRepository } from "./flashcard.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule],
  // providers: [FlashcardRepository, Flashcard, RestDataSource ]
  //providers: []
  providers: [FlashcardRepository, RestDataSource ]
})
export class ModelModule {}
