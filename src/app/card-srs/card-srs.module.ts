import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { BrowserModule } from "@angular/platform-browser";
import { CardSrsComponent } from "./card-srs.component";

@NgModule({
  imports: [ModelModule, BrowserModule],

  declarations: [CardSrsComponent],
  exports: [CardSrsComponent]
})
export class CardSrsModule {}
