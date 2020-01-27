import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module"
import { BrowserModule } from "@angular/platform-browser";
import { CardDetailsComponent } from "./card-details.component";
@NgModule({
    imports: [ ModelModule, BrowserModule],
    declarations: [CardDetailsComponent],
    exports: [CardDetailsComponent]
})
export class CardDetailsModule {

}