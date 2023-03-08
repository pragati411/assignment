import React from 'react';

import MediaPlayer from './MediaPlayer'

import Song from './public/bvrnout-take-it-easy-short.mp3'

function App() {
  return (
    <React.Fragment>
      <MediaPlayer src={Song} />
    </React.Fragment>
  );
}

export default App;