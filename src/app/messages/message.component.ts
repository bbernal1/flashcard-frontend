import { Component } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";
import { NavigationCancel, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
@Component({
  selector: "paMessages",
  templateUrl: "message.component.html",
})
export class MessageComponent {
  public lastMessage: Message;
  constructor(public messageService: MessageService, public router: Router) {
    messageService.registerMessageHandler((m) => (this.lastMessage = m));
    router.events
      .pipe(
        filter(
          (e) => e instanceof NavigationEnd || e instanceof NavigationCancel
        )
      )
      .subscribe((e) => {
        this.lastMessage = null;
      });
  }
}
