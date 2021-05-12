import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module"
import { BrowserModule } from "@angular/platform-browser";
import { CardReviewComponent } from "./card-review.component";
import { RouterModule } from "@angular/router";
import { FcAttrDirective } from './fc-attr-directive.directive';
import { HomepageModule } from "../homepage/homepage.module";

@NgModule({

    imports: [BrowserModule,RouterModule],
    declarations: [CardReviewComponent,FcAttrDirective]
})
export class CardReviewModule {

}