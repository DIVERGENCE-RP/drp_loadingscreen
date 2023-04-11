var conf = {
    yt: "",
    sc: "https://api.soundcloud.com/tracks/596663637",
    vol: 30, 
    shuffle: true,  
    serverName: "DIVERGENCE RP",
    serverFooter: "Český RP server",
    noheadertext: false, 
    fontUrl: "https://cdn.doamatto.xyz/inter.min.css", 
    fontName: "'Inter var experimental', sans-serif", 
    bg: "video", 
    carouselImages: [
      "https://files.catbox.moe/vpqvxx.jpg",
      "https://files.catbox.moe/pzz9cp.jpg",
      "https://files.catbox.moe/mq6k5x.png",
      "https://files.catbox.moe/bh9yy0.png",
      "https://files.catbox.moe/205gkr.jpg",
      "https://files.catbox.moe/d49sa5.jpg",
      "https://files.catbox.moe/efys1k.png"
    ],
    videoBG: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm", 
  };
  
  var song_indexes = new Array();
  var current_index = 0;
  
  function init() {
    cur_time(); 
    elapsed(); 
    music(); 
    header(); 
    bg(); 
    meta(); 
    font();
  }
  
  function font() {
    var t = document.createElement('link');
    t.rel = "stylesheet";
    t.href = conf.fontUrl;
    document.head.appendChild(t);
    document.body.style.fontFamily = conf.fontName;
    return;
  }
  
  function cur_time() {
    var dd = new Date(),
      h = addZero(dd.getHours()),
      m = addZero(dd.getMinutes());
    document.getElementById('cur_time').innerHTML = `${h}:${m}`;
    setInterval(function() {
      var dd = new Date(),
        h = addZero(dd.getHours()),
        m = addZero(dd.getMinutes());
      document.getElementById('cur_time').innerHTML = `${h}:${m}`;
    }, 60000);
  }
  
  function addZero(i) {
    if (i <= 9) {
      return `0${i}`;
    } else {
      return i;
    }
  }
  
  function elapsed() {
    setInterval(() => {
      var a, b;
      var e = performance.now(); 
      var tDiff = Math.round(e / 1000); 
      a = tDiff / 60;
      a = Math.floor(a);
      b = tDiff % 60; 
      document.getElementById('time').innerHTML = `${a}m${b}s `; 
    }, 1000);
  }
  
  function logo() {
    document.getElementsByClassName('server-logo')[0].style.display = "none";
    document.getElementById('server-name').style.display = "block";
  }
  
  function header() {
    if (!conf.noheadertext) return; 
    document.getElementById('server-name').style.display = "none";
  }
  

  function music() {
    if (conf.yt === "" && conf.sc === "") 
      return console.error("[DRP_LOADINGSCREEN] ERROR.");
    if (conf.yt !== "" && conf.sc !== "") 
      return console.error("[5mloading] You provided both a Soundcloud and YouTube playlist");
    if (conf.sc === "" || conf.sc === undefined) { // Value for Soundcloud
      return youtube();
    } else if (conf.yt === "" || conf.yt === undefined) { // Value for YouTube
      return soundcloud();
    }
  }
  
  function loadJS(url) {
    var t = document.createElement('script');
    t.src = url;
    return document.head.appendChild(t);
  }
  
  // Runtime bit for playing music via SoundCloud
  function soundcloud() {
    loadJS("https://w.soundcloud.com/player/api.js"); // Load SC Widget API
    setTimeout(() => { // We have to wait for the API to load.
      var widgetIframe = document.getElementById('playeri');
      var widget = SC.Widget(widgetIframe);
      var context = new AudioContext();
      widget.bind(SC.Widget.Events.READY, () => {
        widget.load(conf.sc, {
          auto_play: true,
          show_artwork: false,
          show_user: false,
          single_active: true
        }); // Loads audio into widget
        widget.setVolume(conf.vol); // Sets volume to whatever was configured
  
        context.resume().then(() => { console.log("context.resume()"); }); // Temporary solution to https://goo.gl/7K7WLu
        widget.play(); // Ensure audio is playing when loaded
        document.getElementById("mute").style.display = "block";
  
        if(conf.shuffle) {
          // Adapted from https://stackoverflow.com/questions/15572253
          widget.bind(SC.Widget.Events.READY, function() {
            widget.bind(SC.Widget.Events.FINISH, function() {
              play_next_shuffled_song(widget);
            });
  
            widget.getSounds(function(sounds) {
              create_shuffled_indexes(sounds.length);
              play_next_shuffled_song(widget);
            });
          });
        }
  
  
        // Mute with spacebar
        var a = false;
        document.addEventListener("keypress", (e) => {
          if(e.isComposing || e.keyCode === 32) {
            a = !a;
            if (a === true) {
              document.getElementById("mute").innerHTML = "Press spacebar to unmute the audio.";
            } else if (a === false) {
              document.getElementById("mute").innerHTML = "Press spacebar to mute the audio.";
            }
            widget.toggle(); // Stops music with spacebar
          }
        });
      });
    }, 500);
  }
  
  
  function play_next_shuffled_song(widget) {
    if (current_index >= song_indexes.length) {
      current_index = 0;
    }
    var track_number = song_indexes[current_index];
    current_index++;
    widget.skip(track_number);
    console.log(track_number);
  }
  
  function create_shuffled_indexes (num_songs) {
    for (var i=0;i<num_songs;i++) {
      song_indexes.push(i);
    }
    song_indexes = shuffle(song_indexes);
  }
  
  //+ Jonas Raoni Soares Silva
  //@ http://jsfromhell.com/array/shuffle [v1.0]
  function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }
  
  // Runtime bit for playing music via YouTube
  function youtube() {
    loadJS("https://www.youtube.com/iframe_api"); // Load YT Embed API
    window.onYouTubePlayerAPIReady = () => {
      var player = new YT.Player("player", {
        height: '1',
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 0,
          list: conf.yt,
          listType: "playlist",
          loop: 1
        }
      });
      if(conf.shuffle) { player.setShuffle = true; } // Shuffles music if enabled
      document.getElementById("mute").style.display = "block";
  
      // Pause with spacebar
      var p = true;
      document.addEventListener("keypress", (e) => {
        if (e.isComposing || e.keyCode === 32) {
          p = !p;
          if (!p) {
            player.pauseVideo(); // Stops music with spacebar
            document.getElementById("mute").innerHTML = "Press spacebar to unmute the audio.";
          }
          if (p) {
            player.playVideo();
            document.getElementById("mute").innerHTML = "Press spacebar to mute the audio.";
          }
        }
      });
    };
  }
  
  // A bunch of code for the background engine
  function bg() {
    switch (conf.bg) {
    case "rainbow":
      animatedBG();
      break;
    case "carousel":
      carousel();
      break;
    case "video":
      videobg();
      break;
    case "static":
    case "simple":
    default:
      break;
    }
  }
  
  // Loading util for video background
  function videobg() {
    document.getElementById('app').classList.add("carousel");
    document.getElementsByClassName('server-logo')[0].style.display = "none";
    var video = document.createElement("video");
    video.autoplay = true;
    video.crossorigin = "anonymous";
    video.muted = true;
    var videoSrc = document.createElement("source");
    videoSrc.src = conf.videoBG;
    video.appendChild(videoSrc);
    document.getElementById('bg').appendChild(video);
    var elem = document.getElementById('bg').childNodes;
    elem[0].style.display = "block"; // it may have (for some reason) more children.
    return;
  }
  
  // Runtime util for loading carousel images
  var index = 0;
  function carousel() {
    var imgs = conf.carouselImages;
    document.getElementById('app').classList.add("carousel");
    document.getElementsByClassName('server-logo')[0].style.display = "none";
    for (let i = 0; i < imgs.length; i++) {
      var img = document.createElement('img');
      img.src = imgs[i];
      document.getElementById('bg').appendChild(img);
    }
    carouselLogic();
    setInterval(() => { carouselLogic(); }, 6000);
  }
  function carouselLogic() {
    var elem = document.getElementById('bg').childNodes;
    for (let i = 0; i < elem.length; i++) {
      elem[i].classList.add("fade-out");
      setTimeout(() => {elem[i].style.display = "none";},1000);
      elem[i].classList.remove("fade-in");
      setTimeout(() => {elem[i].classList.remove("fade-out");}, 1000);
    }
    index++;
    if(index > elem.length) { index = 1; }
    setTimeout(() => {elem[index-1].style.display = "block";}, 1000);
    setTimeout(() => {elem[index-1].classList.add("fade-in");}, 100);
  }
  
  // Runtime util for the rainbow background loading
  function animatedBG() {
    setTimeout(() => {
      let elem = document.getElementsByClassName("sub");
      for (var i = 0; i < elem.length; i++) {
        var a = elem[i].className.split(" ");
        if (a.indexOf("dark-text") == -1) {
          elem[i].className += " " + "dark-text";
        }
      }
      document.body.classList.add("animated");
      return true; // Reports a pass
    }, 10);
  }
  
  function meta() {
    document.getElementById('server-name').innerHTML = conf.serverName;
    document.getElementById("footer-alt").innerHTML = conf.serverFooter;
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
    init();
    if (document.getElementById("server-logo").naturalHeight === 0) {
      return logo();
    }
  }); // Hides page until loaded