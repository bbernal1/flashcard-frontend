import { Injectable } from "@angular/core";
import { Flashcard } from "./flashcard.model";
import { RestDataSource } from "./rest.datasource";

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
}