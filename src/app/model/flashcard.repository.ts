import { Injectable } from "@angular/core";
import { Flashcard } from "./flashcard.model";
import { RestDataSource } from "./rest.datasource";
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class FlashcardRepository {
    
    public flashcards: Flashcard[];
    constructor(private restDataSource: RestDataSource) {
        this.restDataSource.getCards().subscribe(data =>
            {
                
                this.flashcards = data;
                
            });
    }

    getCards(): Flashcard[] {
        
        // //console.log(JSON.stringify(this.flashcard))
        return this.flashcards;
    }
    updateCards() {
        this.restDataSource.getCards().subscribe(data =>
            {
                this.flashcards = data;
            });
    }
    addCard(flashcard: Flashcard) {
        flashcard.easiness= 2.5;
        flashcard.interval = 1;
        flashcard.repetitions = 0;
        flashcard.dueDate = Date.now();
        this.restDataSource.addCard(flashcard).subscribe();
    }

    deleteCard(flashcard: Flashcard) {
        console.log("in repo");
        this.restDataSource.deleteCard(flashcard, flashcard.id).subscribe();
    }

    sendRating(flashcard :Flashcard, quality: number){
        let response :Flashcard;
        console.log(quality);
       return this.restDataSource.sendRating(flashcard, quality);
        // while(response == null) {}
        // console.log(response);
    }
}