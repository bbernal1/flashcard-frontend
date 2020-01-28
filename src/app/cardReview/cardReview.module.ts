import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module"
import { BrowserModule } from "@angular/platform-browser";
import { CardReviewComponent } from "./cardReview.component";
@NgModule({
    imports: [ ModelModule, BrowserModule],
    declarations: [CardReviewComponent],
    exports: [CardReviewComponent]
})
export class CardReviewModule {

}