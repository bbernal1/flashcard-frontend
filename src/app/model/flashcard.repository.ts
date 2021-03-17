import { Injectable } from "@angular/core";
import { Flashcard } from "./flashcard.model";
import { RestDataSource } from "./rest.datasource";
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class FlashcardRepository {
    
    public flashcards: Flashcard[];
    constructor(private restDataSource: RestDataSource) {}

    getCards(): Flashcard[] {
        this.restDataSource.getCards().subscribe(data =>
        {
            //console.log(data);
            this.flashcards = data;
            //console.log(JSON.stringify(this.flashcard));
        });
        //console.log(JSON.stringify(this.flashcard))
        return this.flashcards;

    }
    addCard(flashcard: Flashcard) {
        flashcard.easiness= 2.5;
        flashcard.interval = 1;
        flashcard.repetitions = 0;
        flashcard.dueDate = "2020-02-03T19:00:00";
        console.log(flashcard);
        this.restDataSource.addCard(flashcard).subscribe();
    }
    sendRating(flashcard :Flashcard, quality: number){
        let response :Flashcard;
        console.log(quality);
       return this.restDataSource.sendRating(flashcard, quality);
        //while(response == null) {}
        // console.log(response);
    }
}