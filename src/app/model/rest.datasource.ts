import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Flashcard } from "./flashcard.model";
@Injectable()
export class RestDataSource {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:8080/";
  }

  getCard(): Observable<Flashcard> {
      return this.httpClient.get<Flashcard>(this.baseUrl + "getCard");
  }
}
