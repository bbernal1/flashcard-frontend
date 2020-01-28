import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { CardReviewModule } from "./cardReview/cardReview.module";
import { CardReviewComponent } from "./cardReview/cardReview.component";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CardReviewModule,
    RouterModule.forRoot([{ path: "review", component: CardReviewComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
