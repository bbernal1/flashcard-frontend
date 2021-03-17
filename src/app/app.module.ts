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
import { SchedResolver } from './model/sched.resolver';
import { AddCardModule } from "./add-card/add-card.module";
import { FormsModule } from "@angular/forms";
import { routing } from "./app.routing";

@NgModule({
  declarations: [AppComponent, HomepageComponent],
  imports: [
    BrowserModule,
    CardReviewModule,
    routing,
    CardSrsModule,
    AddCardModule,
  ],
  exports: [RouterModule],
  providers: [FlashCardResolver ,SchedResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}