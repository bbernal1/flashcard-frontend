### Flashcard Application frontend using Angular

#### Summary
This is a pet project to display skills in using Java and Angular to create a fullstack application. I have an interest in learning Japanese and discovered spaced repetition(SRS) flashcard applications such as Anki and Memrise which help in learning the language. Therefore, I decided to create my own SRS flashcard application in order to practice my programming skills and relate it to my interest in Japanese language learning.

**This application is hosted at https://jpcards.herokuapp.com**

**The associated backend application can be found at https://github.com/bbernal1/flashcard-backend**

#### Application Structure
This program is written in Typescript using the Angular framework. The Flashcard class models a flashcard stored in the MongoDB database. The RestDataSource class is used to call the APIs from the backend to retrieve, store, modify, and delete flashcards from the database. The application contains a root module named 'app' which contains feature modules that implement the different features of the application. The following URLs are valid:  
path: "https://jpcards.herokuapp.com/about" This page states a summary of the application.
path: "https://jpcards.herokuapp.com/review" This page reviews all of the flashcards that are currently due for review (due date <= current date).
path: "https://jpcards.herokuapp.com/add" This page adds a card to the database.
path: "https://jpcards.herokuapp.com/form/edit/:id" The ":id" URL parameter is the card id(randomly assigned). This URL is activated after hitting clicking the edit button on a card.
path: "https://jpcards.herokuapp.com/home" This page shows all the cards in the deck and allows the user to edit and delete cards.  

The navigation bar at the top of the page allows users to navigate between the different sections of the application which includes adding a card to the deck

**Module:** app  
**Description:** This is the root module which imports all of the feature modules and bootstraps the application. The app component contains the <router-outlet> element which will subsitute an html template based on the path as described in the app.routing.ts file. The navigation bar is also inserted into this template so that every page of the application has access to the navigation bar.
  
**Module:** homepage  
**Description:** This module contains the component and template that displays the about page.
  
**Module:** add-card  
**Description:** This module contains the component and template that are responsible for displaying the form to add new cards to the database and edit existing cards. This page can be navigated to by either clicking on the 'Add Card' link on the navigation bar or by clicking edit on a card on the card review page.
  
**Module:** card-review  
**Description:** This module contains the component and template that are responsible for the home page and displaying all of the cards in the deck. The data is retrieved from the FlashcardRepository class and displayed for the user. Each card has an edit and delete button. The delete button removes the card from the database while the edit button navigates to the add-card page so that the user can make changes to the flashcard object.
  
**Module:** card-srs  
**Description:** This module contains the component and template that are responsible for the card review feature where the user can review cards that are due for review. The card-srs component filters the cards from the Flashcards array based on the due date.
  
**Module:** model  
**Description:** This module contains the Flashcard class that models a Flashcard in the database. The RestDatasource and FlashcardRepository classes are also declared for retrieving and managing the flashcard data. The properties of the class correspond to the properties of the Flashcard java class in the associated backend application. The module also declares a FlashcardResolver service which is used as a resolver for all of the pages in the application. The resolver will check if the Flashcards array is null or empty and display a message to the user stating that the flashcards are still being retrieved. The message is sent via the MessageService object.

**Module:** Messages  
**Description:** This module contains the component and template that are reponsible for displaying a message to the user about any errors in the application. A message service class is also declared for dependency injection. The message service is used by the FlashcardResolver to send messages to the message component to be displayed on the page.

### Version History
version 0.1.0
Started project

version 0.2.0
Added component for reviewing all cards

version 0.3.0
Added component for reviewing scheduled cards and routing

version 0.4.0
Added homepage component

version 1.0
Application in released state
