import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', throttle(currentTime, 1000));

function currentTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log('current time: ', data.seconds);
}

const watch = localStorage.getItem('videoplayer-current-time');

if (watch) {
  player.setCurrentTime(watch);
}

console.log('watch: ', watch);
