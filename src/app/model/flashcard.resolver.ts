import { Injectable } from '@angular/core';
import { Flashcard } from './flashcard.model';
import { RestDataSource } from './rest.datasource';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { FlashcardRepository } from './flashcard.repository';
import { MessageService } from '../messages/message.service';
import { Message } from '../messages/message.model';

@Injectable()
export class FlashcardResolver implements Resolve<any> {
    constructor(private flashcardRepository: FlashcardRepository,
        private restDataSource: RestDataSource,private messages: MessageService
    ) {}

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) : Observable<Flashcard[]> {
            if (this.flashcardRepository.getCards().length == 0) {
                this.messages.reportMessage(new Message("Loading data..."));
                return this.restDataSource.getCards();
            }
        }
}