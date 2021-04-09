import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RestDataSource } from "../model/rest.datasource";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  flag: boolean;
  data: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.flag = true;
  }

  ngOnInit() {
    this.data = this.activatedRoute.snapshot.data.message;
  }
}
