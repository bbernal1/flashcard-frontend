import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlashcardRepository } from './model/flashcard.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flashcard App';
  constructor(private repository: FlashcardRepository,private router: Router){}
  retHome() {
    this.repository.updateCards()
    this.router.navigateByUrl("/home");    
  }
}
