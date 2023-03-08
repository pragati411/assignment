# Media Player

The UI is ready, and we've loaded an audio file using an <audio> tag. The goal is to capture a  trigger to the <audio> when the user clicks the play/pause button. Every media player I've ever used has implemented the exact same keyboard shortcut. Pressing "Spacebar" key should also  "Play" and "Pause" the audio

You'll want to register a keydown event listener. If they've pressed the spacebar, event.code will be equal to the string "Space".

## Getting Started
-> Install the packages using "yarn install" or "npm install"
-> Run "npm run start" or "yarn start" to start your local server


## Acceptance Criteria
-> Your code changes should only be restricted to 'MediaPlayer.js'
-> Clicking the “Play” button should start playing the song.<br/>
-> Clicking the button again should pause the song.<br/>
-> By default, we should render a <Play> icon inside the button, but it should flip to a <Pause> icon  while the song is playing.<br/>
-> The spacebar key will play (or pause) the currently-selected song.