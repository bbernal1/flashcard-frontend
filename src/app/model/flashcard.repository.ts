import { Injectable } from "@angular/core";
import { Flashcard } from "./flashcard.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class FlashcardRepository {
    
    public flashcard: Flashcard;
    constructor(private restDataSource: RestDataSource) {}

    getCard(): Flashcard {
        this.restDataSource.getCard().subscribe(data =>
        {
            //console.log(data);
            this.flashcard = data;
            //console.log(JSON.stringify(this.flashcard));
        });
        //console.log(JSON.stringify(this.flashcard))
        return this.flashcard;
    }
}