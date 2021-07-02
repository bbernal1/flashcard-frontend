import { Routes, RouterModule } from "@angular/router";
import { AddCardComponent} from "./add-card/add-card.component";
import { CardReviewComponent } from "./card-review/card-review.component";
import { CardSrsComponent } from "./card-srs/card-srs.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { FlashcardResolver } from "./model/flashcard.resolver";
import { SchedResolver } from "./model/sched.resolver";

const routes: Routes = [
  {
    path: "about",
    component: HomepageComponent,
    resolve: { resolver: FlashcardResolver }
  },
  {
    path: "review",
    component: CardSrsComponent,
    resolve: { resolver: FlashcardResolver }
  },
  {
    path: "add",
    component: AddCardComponent,
    resolve: { resolver: FlashcardResolver }
  },
  {
    path: "form/:mode/:id",
    component: AddCardComponent,
    resolve: { resolver: FlashcardResolver }
  },
  {
    path: "home",
    component: CardReviewComponent
    ,resolve: { resolver: FlashcardResolver }
  },
  { path: "**", redirectTo: "home" }
];
export const routing = RouterModule.forRoot(routes);
