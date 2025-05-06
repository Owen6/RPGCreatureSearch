# RPGCreatureSearch

RPG Creature Stat Search Application
FreeCodeCamp: JavaScript Algorithms and Data Structures Certification - Project 5

Final Project in the certification program.

Description:
This project is an application that utilizes the provided FreeCodeCamp RPG Creature API to search and pull op the individual stats and attributes of a valid creature within the API either by Creature ID or Creature Name. If the value entered into the input field represents either a valid creature ID or valid creature name, the program will try to fetch the related data from the API and load it to the UI. If the value entered into the input field is not valid, the application will catch the error when trying to fetch the information from the API and the user will be alerted that no creature exists within the data. Indexing for Creature IDs starts at 1 and increments by 1 for what is inferred to be ease of use.

API:"https://rpg-creature-api.freecodecamp.rocks/api/creature/{creature-name/creature-id}"
    -{creature-name/creature-id} should be replaced with either a valid creature name or id.
    -Example name: Pyrolynx -> "https://rpg-creature-api.freecodecamp.rocks/api/creature/Pyrolynx"
    -Example ID: 1 -> "https://rpg-creature-api.freecodecamp.rocks/api/creature/1"

Project Files:
index.html
styles.css
script.js
project5Instructions.png
project_5_checks.png

How it Works:
1. Enter a value into the input field.
2. Click the "Search" Button or hit Enter on your keyboard
3. The algorithm will display the matching creature's stats to the user or will alert them that no creature in the system matches the given input.

Technologies:
1. HTML5
2. CSS3
3. JavaScript(ES6)
