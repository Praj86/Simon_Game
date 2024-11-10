
# Simon Game

Welcome to the **Simon Game**! This web application is an interactive game where users have to remember and reproduce a sequence of colors and sounds. The game gets progressively harder as the sequence lengthens, challenging your memory and reflexes.

## Project Link

Access the live site here: [Simon Game](https://praj86.github.io/Simon_Game/)

## Features

- **Interactive Gameplay**: Users can interact with the game using keyboard keys or clicking on the colored buttons.
- **Responsive Design**: Ensures an optimal experience across various screen sizes and devices.
- **Sound Effects**: Each color button plays a unique sound, enhancing the gameplay experience.
- **Score Tracking**: Displays current and highest scores to keep track of your progress.

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

### JavaScript

The JavaScript file contains the game logic, including functions for starting the game, handling user inputs, checking the game pattern, and updating scores.

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
