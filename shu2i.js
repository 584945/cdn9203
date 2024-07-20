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
