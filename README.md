# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Sumana Nukala

Time spent: 3 hours spent in total

Link to project: (https://glitch.com/edit/#!/faithful-geode-glider)

## Required Functionality

The following **required** functionality is complete:

* [ yes] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ yes] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ yes] Game buttons each light up and play a sound when clicked. 
* [ yes] Computer plays back sequence of clues including sound and visual cue for each button
* [ yes] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ yes] User wins the game after guessing a complete pattern
* [ yes] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ yes] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ yes] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ yes] More than 4 functional game buttons
* [ yes] Playback speeds up on each turn
* [ yes] Computer picks a different pattern each time the game is played
* [ yes] Player only loses after 3 mistakes (instead of on the first mistake)
* [ yes] Game button appearance change goes beyond color (e.g. add an image)
* [ no ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ yes] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!


## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/dz2KlSj.gif)
)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/js/js_output.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
- One challenge I encountered during the creation of this submission was an error in my guess function which caused only one clue of the game to be played.
I overcame this issue by first thinking about which function in my code could have caused the error. Once I isolated the function,
I thought about which statements within the function could have caused the error. To verify this, I added console.log statements inside those statements
to see if the variables were being updated correctly. Once I discovered the error in variable updates, I edited my code and then checked the log statements
again to make sure my variables had the correct values. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
- How are websites usually hosted when you are not using a platform like glitch?
- How are websites built to handle millions of users at the same time?
- How do you ensure that a webpage looks the same on different browsers and different devices with varying screen sizes?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
- Make the game multiplayer, so you are competing against friends
- Make it a pictoral memory game, where all the tiles are white initially and you have to remember which image is under which tile
- Add more tiles and make the length of the game longer 



## License

    Copyright [Sumana Nukala]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.