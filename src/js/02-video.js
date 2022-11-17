import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const timeOfPause = localStorage.getItem('videoplayer-current-time');
const parsedTimeOfPause = JSON.parse(timeOfPause);

if (parsedTimeOfPause) {
  player.setCurrentTime(parsedTimeOfPause);
}

player.on('timeupdate', throttle(handleTimeUpdate, 1000));

function handleTimeUpdate(event) {
  //   console.log(event.seconds);

  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(event.seconds)
  );
}
