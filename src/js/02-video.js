import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const timeOfPause = localStorage.getItem('videoplayer-current-time');
const parsedTimeOfPause = JSON.parse(timeOfPause);

if (parsedTimeOfPause) {
  player.setCurrentTime(parsedTimeOfPause);
}

player.on('timeupdate', function (event) {
  //   console.log('timeupdate played the video!');
  //   console.log(event.seconds);

  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(event.seconds)
  );
});
