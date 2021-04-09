import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module"
import { BrowserModule } from "@angular/platform-browser";
import { CardReviewComponent } from "./card-review.component";
import { RouterModule } from "@angular/router";
import { FcAttrDirective } from './fc-attr-directive.directive';
import { HomepageModule } from "../homepage/homepage.module";
@NgModule({
    imports: [ ModelModule, BrowserModule,RouterModule,HomepageModule],
    declarations: [CardReviewComponent,FcAttrDirective],
    exports: [CardReviewComponent]
})
export class CardReviewModule {

}