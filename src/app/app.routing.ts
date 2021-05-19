import { Routes, RouterModule } from "@angular/router";
import { AddCardComponent} from "./add-card/add-card.component";
import { CardReviewComponent } from "./card-review/card-review.component";
import { CardSrsComponent } from "./card-srs/card-srs.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { FlashCardResolver } from "./model/flashcard.resolver";
import { SchedResolver } from "./model/sched.resolver";

const routes: Routes = [
  {
    path: "about",
    component: HomepageComponent
  },
  {
    path: "review",
    component: CardSrsComponent
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
    path: "home",
    component: CardReviewComponent
  },
  { path: "**", redirectTo: "home" }
];
export const routing = RouterModule.forRoot(routes);
