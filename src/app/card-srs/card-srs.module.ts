import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { BrowserModule } from "@angular/platform-browser";
import { CardSrsComponent } from "./card-srs.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [ModelModule, RouterModule, BrowserModule],

  declarations: [CardSrsComponent],
  exports: [CardSrsComponent]
})
export class CardSrsModule {}
