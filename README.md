# File System Access API Example
This fs example allows user to increment/decrement state object data and then Save, Save As, or Open/Load state object as JSON file

### First Commit Problems
- I'm using VS-Code and Go Live
- When Save or Save As evoked with button click, state object data is saved but Chrome browser page is reloaded
- This resets the state data back to initial values of zero.
- The loadOpen() function seems to work without reloading page.
- When I added fs code into a larger project, the reload problem occurred again.
- When I made a copy of this folder, and opened in VS-Code (using Go Live), Save, Save As, Load worked without reloading page.
- Not sure why fs code would work without reloading by just copying folder
- When I added fs code into a larger project, the reload problem occurred again.
- As in the fs example, data seems to be saved in JSON file but page reloads and sets initial state values.
- When I deploy the fs example from github, it seems to work appropriately without reloading page on Chrome.
- I'm unclear if this is a problem with VS-Code, Go Live, Chrome, or something I need to add to html header or package.json.

### Partial Solution Update
Partial solution: I discovered with the help of a family member, that when using Visual Studio Code (VS-Code) with Live Server (Go Live), 
the saved JSON file must be stored outside the project folder that is opened in VS-Code. This is probably why the code worked without a 
page reload when I copied the folder – I was reading the JSON file from the original folder and not the copied folder. Further experiments 
showed that if I saved the JSON file anywhere else on my local computer (other than the opened project folder in VS-Code) the program worked 
without reloading the browser page. I’m still unclear if the page-reload problem is particular to just VS-Code or Live Server (or both working 
together), and if the problem occurs in other integrated development environments (IDEs).

Please let me know if you have further insights related to this problem.

Thank you!

