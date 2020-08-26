addEventListener('load', initiate);
var maxim, media, play, bar, progress, mute, volume, loop;

function initiate() {
    maxim = 400;
    play = document.getElementById('play');
    bar = document.getElementById('bar');
    progress = document.getElementById('progress');
    media = document.getElementById('media');
    mute = document.getElementById('mute');
    volume = document.getElementById('volume');

    play.addEventListener('click', push);
    mute.addEventListener('click', sound);
    bar.addEventListener('click', move);
    volume.addEventListener('change', level);


}

function push() {
    if (!media.paused && !media.ended) {
        media.pause();
        play.value = 'Play';
        clearInterval(loop);
    } else {
        media.play();
        play.value = 'Pause';
        loop = setInterval(status, 1000);
    }
}

function status() {
    if (!media.ended) {
        var size = parseInt(media.currentTime * maxim / media.duration);
        progress.style.width = size + 'px';
    } else {
        progress.style.width = '0px';
        play.value = 'Play';
        clearInterval(loop);
    }
}

function sound() {

    if (mute.value == 'Mute') {
        media.muted = true;
        mute.value = 'Sound';
    } else {
        media.muted = false;
        mute.value = 'Mute';
    }
}
function move(e){
    if(!media.paused && !media.ended){
        var mouseX = e.pageX - bar.offsetLeft;
        var newtime = mouseX * media.duration / maxim;
        media.currentTime = newtime;
        progress.style.width = mouseX + 'px';
    }
}
function level(){
    media.volume = volume.value;
}




