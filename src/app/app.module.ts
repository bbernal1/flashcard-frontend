import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { CardReviewModule } from "./card-review/card-review.module";
import { CardReviewComponent } from "./card-review/card-review.component";
import { FlashCardResolver } from "./model/flashcard.resolver";
import { CardSrsComponent } from './card-srs/card-srs.component';
import { CardSrsModule } from './card-srs/card-srs.module';
import { HomepageComponent } from './homepage/homepage.component';
import { AddCardComponent } from './add-card/add-card.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, AddCardComponent],
  imports: [
    BrowserModule,
    CardReviewModule,
    CardSrsModule,
    RouterModule.forRoot([
      {
        path: "allreview",
        component: CardReviewComponent,
        resolve: { message: FlashCardResolver }
      },
      {
        path:"schedreview",
        component: CardSrsComponent,
        resolve: { message: FlashCardResolver }

      },
      {
        path: "**",
        component: HomepageComponent
      }
    ])
  ],
  exports: [RouterModule],
  providers: [FlashCardResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}