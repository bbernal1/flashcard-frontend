import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Flashcard } from "./flashcard.model";



@Injectable()
export class RestDataSource {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = "https://jpflashcards1.herokuapp.com:443/";
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
    return this.httpClient.post<Flashcard>(
      this.baseUrl + "flashcards",
      flashcard);
  }
  
  //DELETE
  deleteCard(flashcard: Flashcard, id) {
    console.log("deleting");
    return this.httpClient.delete<Flashcard>(this.baseUrl+"flashcards/"+id);
  }

  //PUT
  sendRating(flashcard: Flashcard, quality: number): Observable<Flashcard> {
    return this.httpClient.put<Flashcard>(
      this.baseUrl + "flashcard/" + quality,
      flashcard
    );
  }
}