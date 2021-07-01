import { NgModule } from "@angular/core";
import { Flashcard } from "./flashcard.model";
import { FlashcardRepository } from "./flashcard.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { FlashcardResolver } from './flashcard.resolver';

@NgModule({
  imports: [HttpClientModule],
  providers: [FlashcardRepository, RestDataSource, FlashcardResolver ]
})

export class ModelModule {}
