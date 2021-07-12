### Flashcard Application frontend using Angular

### Summary
This is a pet project to display skills in using Java and Angular to create a fullstack application. I have an interest in learning Japanese and discovered spaced repetition(SRS) flashcard applications such as Anki and Memrise which help in learning the language. Therefore, I decided to create my own SRS flashcard application in order to practice my prgramming skills and relate it to my interest in Japanese language learning.

**This application is hosted at https://jpcards.herokuapp.com**

**The associated backend application can be found at https://github.com/bbernal1/flashcard-backend**

#### Application Structure
This program is written in Typescript using the Angular framework. The Flashcard class models a document in the Flashcards collection in MongoDB. The RestDataSource Class is used to call the APIs from the backend and manipulate the Flashcards database. The information retrieved from the database is displayed in the different templates of the web application. The application contains a root module named 'app' which contains various feature modules responsible for displaying information in the template and modeling the flashcard data. Any URL should redirect to Homepage. This page contains information about the app and links to the Card Review mode and SRS Review mode

**Module:** app  
**Description:** This is the root module which imports all of the feature modules and bootstraps the application. The app copenent contains the <router-outlet> element which will subsitute an html template based on the path as described in the app.routing.ts file.
  
**Module:** homepage  
**Description:** This module contains the component and template that displays the about page.
  
**Module:** add-card  
**Description:** This module contains the component and template that are responsible for the form and entering cards into the database.
  
**Module:** card-review  
**Description:** This module contains the component and template that are responsible for the home page and displaying all of the cards in the deck. The data is retrieved from the FlashcardRepository class and displayed for the user. Each card has an edit and delete button. The delete button removes the card from the database while the edit button navigates to the add-card template so that the user can make changes to the flashcard object.
  
**Module:** card-srs  
**Description:** This module contains the component and template that are responsible for the card review feature where the user can review cards that are due for review. The card-srs component filters the cards from the Flashcards array based on the due date.
  
**Module:** model  
**Description:** This module contains the Flashcard class that models a Flashcard in the database. The RestDatasource and FlashcardRepository classes are also declared for retriving and managing the flashcard data. The properties of the class correspond to the properties of the Flashcard java class in the associated backend application. The module also declares a FlashcardResolver service which is used as a resolver for all of the templates in the application. The resolver will check if the Flashcards array is null or empty and display a message to the user stating that the flashcards are still being retrieved. The message is sent via the MessageService object.

**Module:** Messages  
**Description:** This module contains the component and template that are reponsible for displaying a message to the user about any errors in the application. A message service is also declared for dependency injection. The message service is used by the FlashcardResolver to send messages to the message component to be displayed in the template.

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
