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

  //GET SCHEDULED CARDS
  getSched(): Observable<Flashcard[]> {
    return this.httpClient.get<Flashcard[]>(this.baseUrl + "scheduled");
  }

  //GET ALL CARDS
  getCards(): Observable<Flashcard[]> {
    return this.httpClient.get<Flashcard[]>(this.baseUrl + "flashcards");
  }

  //POST
  addCard(flashcard: Flashcard) {
    console.log("here");
    return this.httpClient.post<Flashcard>(
      this.baseUrl + "flashcards",
      flashcard
    );
  }

  //PUT
  sendRating(flashcard: Flashcard, quality: number): Observable<Flashcard> {
    return this.httpClient.put<Flashcard>(
      this.baseUrl + "flashcard/" + quality,
      flashcard
    );
  }
}
