import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { CardReviewModule } from "./card-review/card-review.module";
import { FlashcardResolver } from "./model/flashcard.resolver";
import { CardSrsModule } from './card-srs/card-srs.module';
import { SchedResolver } from './model/sched.resolver';
import { AddCardModule } from "./add-card/add-card.module";
import { routing } from "./app.routing";
import { HomepageModule } from "./homepage/homepage.module";
import { MessageModule } from "./messages/message.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    HomepageModule,
    BrowserModule,
    CardReviewModule,
    routing,
    CardSrsModule,
    AddCardModule,
    MessageModule
  ],
  exports: [],
  providers: [FlashcardResolver,SchedResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}