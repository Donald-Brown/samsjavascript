let video = document.getElementById('video1');

function play(){
  return video.play();
}

function pause(){
  return video.pause();
}

document.getElementById('play').addEventListener('click', play);
document.getElementById('pause').addEventListener('click', pause);

//////////////////////////////////////////////////
let audio = document.getElementById('audio1');

function playAudio(){
  return audio.play();
}

function pauseAudio(){
  return audio.pause();
}

document.getElementById('audioPlay').addEventListener('click', playAudio);
document.getElementById('audioPause').addEventListener('click', pauseAudio);