
# Simon Game

Welcome to the **Simon Game**! This web application is an interactive game where users have to remember and reproduce a sequence of colors and sounds. The game gets progressively harder as the sequence lengthens, challenging your memory and reflexes.

## Project Link

Access the live site here: [Simon Game](https://praj86.github.io/Simon_Game/)

## Features

- **Interactive Gameplay**: Users can interact with the game using keyboard keys or clicking on the colored buttons.
- **Responsive Design**: Ensures an optimal experience across various screen sizes and devices.
- **Sound Effects**: Each color button plays a unique sound, enhancing the gameplay experience.
- **Score Tracking**: Displays current and highest scores to keep track of your progress.
### Difficulty Toggle Button

- Added a difficulty toggle button to switch between "Easy" and "Hard" modes.
- Implemented functionality to decrease the difficulty increase when the button is in "Hard" mode.
- Added CSS styling for the difficulty toggle button for responsiveness.

## Technologies Used

- **HTML5**: Structure of the webpage.
- **CSS3**: Styling and layout.
- **JavaScript**: Game logic and interactivity.
- **jQuery**: Simplifying JavaScript DOM manipulation and event handling.

## How to Use

1. Open the live site link.
2. Press the 'Control' key to start the game.
3. Follow the sequence of colors and replicate it by pressing the corresponding keys (`w`, `d`, `s`, `a`) or clicking on the colored buttons.
4. Try to remember and reproduce the increasing sequence of colors.
5. The game ends if you press the wrong button, and you can restart by pressing the 'Alt' key.

**Starting the Game**:
   - Press the `Control` key or click the start button to start the game.
   - Follow the generated sequence by clicking the buttons or pressing the corresponding keys.
**Toggling Difficulty**:
   - Click the difficulty toggle button to switch between "Easy" and "Hard" modes.
   - In "Hard" mode, the difficulty increases more rapidly.

## Installation and Setup

If you'd like to modify or extend the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/praj86/Simon_Game.git
   ```
2. Open the project folder.
3. Launch the `index.html` file in your preferred browser to start playing.

## Code Structure

### HTML

The HTML file contains the structure of the game, including the score display and color buttons.

### CSS

The CSS file is used to style the game elements, ensuring a visually appealing and responsive design.
### Responsive Design

- Used CSS media queries to make the difficulty toggle button responsive for different screen sizes and touch devices.
- Adjusted padding and border styles for smaller screens and devices with coarse pointers.

### JavaScript

The JavaScript file contains the game logic, including functions for starting the game, handling user inputs, checking the game pattern, and updating scores.
### JavaScript Enhancements

- **Event Listeners**:
  - Added event listeners for keydown and button click events to start the game and handle user interactions.

- **Game Pattern**:
  - Added logic to generate and play the next sequence in the game pattern.
  - Ensured audio plays correctly for each sequence.

- **Check Answer**:
  - Implemented function to check the user's answer against the game pattern.
  - Added functionality to handle game over and reset the game variables.

- **Toggle Difficulty Button**:
  - Implemented a function to toggle the difficulty button state between "Easy" and "Hard".

#### Key Functions

- **nextSequence**: Generates the next color in the sequence.
- **checkAnswer**: Checks the user's input against the game pattern.
- **startOver**: Resets the game variables to restart the game.
- **animatePress**: Animates the button press.
- **playAudio**: Plays the sound associated with the button.

### jQuery

jQuery is used to simplify DOM manipulation and event handling, making the game logic easier to implement and manage.

## Future Enhancements

- **Difficulty Levels**: Introduce varying levels of difficulty.
- **Multiplayer Mode**: Allow multiple users to play and compete.
- **Enhanced UI/UX**: Improve the visual and interactive elements for a more engaging experience.

## Contributing

Feel free to contribute to the project by submitting pull requests or reporting issues. For major changes, please open an issue to discuss what you would like to change.


Enjoy playing the Simon Game and challenge your memory!
```