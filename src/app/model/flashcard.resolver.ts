import { Injectable } from '@angular/core';
import { Flashcard } from './flashcard.model';
import { RestDataSource } from './rest.datasource';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class FlashCardResolver implements Resolve<any> {
    constructor(
        private restDataSource: RestDataSource
    ) {}

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) : Observable<Flashcard[]> {
            return this.restDataSource.getCards();
        }
}