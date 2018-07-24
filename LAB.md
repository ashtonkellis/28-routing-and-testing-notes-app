#### Feature Tasks 
Refactor and add the following components 

###### NoteUpdateForm 
Create a NoteUpdateForm component that inherits a note through `props.children`, and onSubmit is able to update the App's state with an updated note. *This is equivalent to lecture code's Modal component*.

###### Refactor the NoteItem to have the following behavior
If the user double clicks on the notes content it should switch to the Edit View  
* Default view  
  * Display the notes content and a delete button
  * Display a delete button that will remove the Note from the application's state
* Edit View 
  * Show the NoteUpdateForm and a Cancel Button
    * onSubmit or click of the cancel button in NoteUpdateForm it should switch back to the default view

###### App Component Tree
Your components should be nested in the following layout  
``` 
App
  noteForm
  NoteList
    NoteItem
      NoteUpdateForm
```
component: NoteForm


#### Test
* Test your app using Cypress.io. Your test runner should go through the following scenario:
  * The user arrives at the homepage located at `/`
  * The user clicks on the `Dasboard` link in the navbar and should see the `Dashboard` component form to enter a note. In addition, the URL pathname should now be `/dashboard`.
  * The user enters a title and content into the input fields and submits the form to create a new note.
  * A new note should be displayed on the page in an unordered list.
 * Write any combination of explicit/implicit assertion statements in order to test your app. You will get full credit for testing if a TA can run your tests in Cypress and see the required scenario take place. 

#### Documentation  
Write a description of the project in your README.md

## Submission Instructions
  * Continue working off Lab 28
  * Work in a branch on your fork called `lab-30`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit an observation and how long you spent on canvas 
  * No Travis CI setup required for this lab
  * **Copying of lecture code's SCSS styles will be an automatic 0**