# File System Access API Example
This fs example allows user to increment/decrement state object data and then Save, Save As, or Open/Load state object as JSON file

### First Commit Problems
- I'm using VS-Code and Go Live
- When Save or Save As evoked with button click, state object data is saved but Chrome browser page is reloaded
- This resets the state data back to initial values of zero.
- The loadOpen() function seems to work without reloading page.
- When I added fs code into a larger probject, the reload problem occurred again.
- When I made a copy of this folder, and opened in VS-Code (using Go Live), Save, Save As, Load worked without reloading page.
- Not sure why fs code would work without reloading by just copying folder
- When I added fs code into a larger probject, the reload problem occurred again.
- As in the fs example, data seems to be saved in JSON file but page reloads and sets initial state values.
- When I deploy the fs example from github, it seems to work appropraitely without reloading page on Chrome.
- I'm unclear if this is a problem with VS-Code, Go Live, Chrome, or something I need to add to html header or package.json.


Appreciate any suggestions to resolve page reload problem.

Thank you!

