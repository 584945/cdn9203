document.addEventListener('DOMContentLoaded', function() {
  const phrases = ["Hi, I'm XIE", "HAVE A GOOD DAY !!"];
  let index = 0;
  let currentPhrase = phrases[index];
  let currentLength = 0;
  let forward = true;

  function updateTitle() {
    document.title = currentPhrase.substring(0, currentLength);
    
    if (forward) {
      currentLength++;
      if (currentLength > currentPhrase.length) {
        forward = false;
      }
    } else {
      currentLength--;
      if (currentLength === 0) {
        forward = true;
        index = (index + 1) % phrases.length;
        currentPhrase = phrases[index];
      }
    }
    
    setTimeout(updateTitle, 148);
  }

  updateTitle();
});

function closenotitab() {
  document.getElementById('overlay').style.display = 'none'
}

function redirect() {
  window.location.href = "https://t.me/ratuuen"
}

let clicked = false;

window.addEventListener('click', function() {
  if (!clicked) { 
    clicked = true;
    const listUrl = [
      "https://github.com/xiedepchai/music/raw/main/0b44iq.mp3",
      "https://github.com/xiedepchai/music/raw/main/2sx2lg.mp3",
      "https://github.com/xiedepchai/music/raw/main/ei656q.mp3",
      "https://github.com/xiedepchai/music/raw/main/m34tk8.mp3",
      "https://github.com/xiedepchai/music/raw/main/n4wdrq.mp3",
      "https://github.com/xiedepchai/music/raw/main/mtvjgu.mp3",
      "https://github.com/xiedepchai/music/raw/main/ru12fj.mp3",
      "https://github.com/xiedepchai/music/raw/main/13939d.mp3",
      "https://github.com/xiedepchai/music/raw/main/7qn746.mp3",
      "https://github.com/xiedepchai/music/raw/main/4m2h1x.mp3",
      "https://github.com/xiedepchai/music/raw/main/it5op5.mp3",
      "https://github.com/xiedepchai/music/raw/main/iyw93ufh.mp3",
      "https://github.com/xiedepchai/music/raw/main/hnbd92.mp3",
      "https://github.com/xiedepchai/music/raw/main/ln39rm.mp3",
      "https://github.com/xiedepchai/music/raw/main/ytdmr28.mp3"
    ];

    const audioElement = new Audio();
    audioElement.id = 'music';
    
    function playRandomSong() {
      const randomIndex = Math.floor(Math.random() * listUrl.length);
      audioElement.src = listUrl[randomIndex];
      audioElement.play();
    }

    playRandomSong();
    
    audioElement.autoplay = true;
    audioElement.controls = false;
    document.body.appendChild(audioElement);

    audioElement.addEventListener('ended', playRandomSong);
    window.removeEventListener('click', arguments.callee);
  }
});
