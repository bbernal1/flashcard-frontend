import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Flashcard } from "./flashcard.model";
@Injectable()
export class RestDataSource {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://192.168.1.170:8080/";
  }

  getCards(): Observable<Flashcard[]> {
      return this.httpClient.get<Flashcard[]>(this.baseUrl + "getCards");
  }
}
