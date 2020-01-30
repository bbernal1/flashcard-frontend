import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { CardReviewModule } from "./card-review/card-review.module";
import { CardReviewComponent } from "./card-review/card-review.component";
import { FlashCardResolver } from "./model/flashcard.resolver";
import { CardSrsComponent } from './card-srs/card-srs.component';
import { CardSrsModule } from './card-srs/card-srs.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CardReviewModule,
    CardSrsModule,
    RouterModule.forRoot([
      {
        path: "review",
        component: CardReviewComponent,
        resolve: { message: FlashCardResolver }
      },
      {
        path:"srs",
        component: CardSrsComponent,
        resolve: { message: FlashCardResolver }

      },
      {
        path: "**",
        redirectTo: "review"
      }
    ])
  ],
  exports: [RouterModule],
  providers: [FlashCardResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}