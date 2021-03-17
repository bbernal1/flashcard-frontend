import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module"
import { BrowserModule } from "@angular/platform-browser";
import { CardReviewComponent } from "./card-review.component";
import { RouterModule } from "@angular/router";
@NgModule({
    imports: [ ModelModule, BrowserModule,RouterModule],
    declarations: [CardReviewComponent],
    exports: [CardReviewComponent]
})
export class CardReviewModule {

}