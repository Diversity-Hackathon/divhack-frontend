# Green Foot 
  
<img align="right" height="35" bottom="0" alt="Greenfoot Logo" src="./public/images/logo.png">

## About
Green Foot is a web-based application concerned with showing user environmentally friendly ways of traveling. Given a starting and target location, we provide the user with a list of modes of transportation ranked according to their carbon emission amount for that given trip. Our hopes are to encourage the user to seriously consider the contribution and impact that he or she can make by remaining aware of and trying to reduce his or her own carbon footprint.
    
The project was born out of a collaborative effort for the Diversity Hackathon held locally in Austin, Texas.

## How to Use
The landing screen will have the user enter an email address,which is used solely for the purpose of creating a record of data associated with that particular address. In the future, our team would like to implementent a feature that motivates the user to stay under a certain emission threshold according to their trips logged in the past.
    
After logging in, the screen will prompt for a starting and target destination. As of now, the addresses are limited to those in Bing's VirtualEarth API, which seems to mainly support data for North America.

Lastly, the app will display the resultant information that was calculated by and delivered from our backend.

## Tech Stack
- React / Redux JS
    - Our need to display emissions data dynamically and efficiently was the core feature of the app, and is something that React is certainly capable of.
    - Redux JS is responsible for the data model of our application, which is represented by a user ID, their starting and ending locations, and lastly the options from the resultant search.
- Express / Node JS
    - The flexibility and minimalistic approach of Express JS attracted us to choose it for our backend framework as it allowed us to somewhat smoothly create an app in a quite limited amount of time.
    - With the two given addresses sent from the frontend, the backend calculates a total distance, which is then used to determine the carbon emissions.

## Acknowledgements
We thoroughly enjoyed making this application together and learned quite a lot, especially regarding how the frontend and backend communicate together. The hackathon was an incredible event, and we all recommend participating in the next one!
    
Feel free to contact us should you have any questions. Thank you very much for reading!