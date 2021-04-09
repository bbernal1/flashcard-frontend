import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { BrowserModule } from "@angular/platform-browser";
import { HomepageComponent } from "./homepage.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FcStrucDirective } from "./fc-struc-directive.directive";
import { FcIteratorDirective } from "./iterator.directive";
import { RestDataSource } from "../model/rest.datasource";



@NgModule({
  imports: [CommonModule, FormsModule, ModelModule, BrowserModule],

  declarations: [HomepageComponent,FcStrucDirective, FcIteratorDirective],
  
  exports: [HomepageComponent,FcIteratorDirective]
})
export class HomepageModule {}