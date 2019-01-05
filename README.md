# GifTastic

Before You Begin



Hit the GIPHY API.


Fool around with the GIPHY API. Giphy API.
Be sure to read about these GIPHY parameters (hint, hint):


q
limit
rating


Like many APIs, GIPHY requires developers to use a key to access their API data. To use the GIPHY API, you'll need a GIPHY account (don't worry, it's free!) and then obtain an API Key by creating an app.
Make sure you switch the protocol in the query URL from http to https, or the app may not work properly when deployed to Github Pages.


Watch the demo video



You should have a high-level understanding of how this assignment works before attempting to code it.



Submission on BCS


Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!



Instructions



Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.


We chose animals for our theme, but you can make a list to your own liking.



Your app should take the topics in this array and create buttons in your HTML.


Try using a loop that appends a button for each string in the array.


When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

Under every gif, display its rating (PG, G, so on).


This data is provided by the GIPHY API.
Only once you get images displaying with button presses should you move on to the next step.


Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
Deploy your assignment to Github Pages.
Rejoice! You just made something really cool.
