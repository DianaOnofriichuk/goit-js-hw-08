import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

if (localStorage.getItem('videoplayer-current-time') !== null) {
  try {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  } catch (err) {
    console.log('error');
  }
}

player.on('timeupdate', throttle(saveVideoTime, 1000));

function saveVideoTime(e) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
}
