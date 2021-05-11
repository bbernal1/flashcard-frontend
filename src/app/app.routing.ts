import { Routes, RouterModule } from "@angular/router";
import { AddCardComponent } from "./add-card/add-card.component";
import { CardReviewComponent } from "./card-review/card-review.component";
import { CardSrsComponent } from "./card-srs/card-srs.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { FlashCardResolver } from "./model/flashcard.resolver";
import { SchedResolver } from "./model/sched.resolver";

const routes: Routes = [
  {
    path: "about",
    component: HomepageComponent,
    resolve: { message: FlashCardResolver }
  },
  {
    path: "review",
    component: CardSrsComponent,
    resolve: { message: SchedResolver },
  },
  {
    path: "add",
    component: AddCardComponent,
  },
  {
    path: "form/:mode/:id",
    component: AddCardComponent,
  },
  {
    path: "",
    component: CardReviewComponent
    //,resolve: { message: FlashCardResolver },
   }
  ,{
    path: "**",
    component: CardReviewComponent
    //,resolve: { message: FlashCardResolver },
  }
];
export const routing = RouterModule.forRoot(routes);
