import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module"
import { BrowserModule } from "@angular/platform-browser";
import { AddCardComponent } from "./add-card.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [FormsModule,CommonModule, RouterModule],
    declarations: [AddCardComponent],
    exports: [AddCardComponent]
})
export class AddCardModule {

}