import { Injectable } from '@angular/core';
import { Flashcard } from './flashcard.model';
import { RestDataSource } from './rest.datasource';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { FlashcardRepository } from './flashcard.repository';
import {of} from 'rxjs';
import { delay} from 'rxjs/operators';
@Injectable()
export class FlashCardResolver implements Resolve<any> {
    constructor(
        private restDataSource: RestDataSource
    ) {}

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) : Observable<Flashcard[]> {
            // console.log('Loggin collected route Parameter', route.params['name']);
            // return this.restDataSource.getCards();
            //return of("Hello Alligator!").pipe(delay(2000));
            return this.restDataSource.getCards();
        }
}