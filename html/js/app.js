// For help configuring, go to https://github.com/doamatto/5m_loading/wiki/
var conf = {
  yt: "",
  sc: "https://api.soundcloud.com/tracks/596663637",
  vol: 30, // Sets volume for everything
  shuffle: true, // Shuffle songs in your playlist

  serverName: "DIVERGENCE RP",
  serverFooter: "A certified hood classic.",

  noheadertext: false, // Disables the header text if you have a logo

  fontUrl: "https://cdn.doamatto.xyz/inter.min.css", // Needs to be CSS stylesheet
  fontName: "'Inter var experimental', sans-serif", // Needs to be the name of the font on the stylesheet

  bg: "videoBG", // Options: static, animated, carousel, videobg
  carouselImages: [
    "https://files.catbox.moe/vpqvxx.jpg",
    "https://files.catbox.moe/pzz9cp.jpg",
    "https://files.catbox.moe/mq6k5x.png",
    "https://files.catbox.moe/bh9yy0.png",
    "https://files.catbox.moe/205gkr.jpg",
    "https://files.catbox.moe/d49sa5.jpg",
    "https://files.catbox.moe/efys1k.png"
  ],
  img: "url(data:image/jpeg;base64,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)",
  videoBG: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm", // can be any format supported by https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Video
};

// Shuffle vars for SoundCloud
var song_indexes = new Array();
var current_index = 0;

function init() {
  // To disable music, prepend '//' to 'music();' to comment the line.
  cur_time(); // Displays Current Time
  elapsed(); // Displays Elapsed Time for Joining
  music(); // Runs Music Engine
  header(); // Disables the header text if you have a logo 
  bg(); // Runs Background Engine
  meta(); // Adds user-meta onto page
  font();
}

//Runtime util for loading the font
function font() {
  var t = document.createElement('link');
  t.rel = "stylesheet";
  t.href = conf.fontUrl;
  document.head.appendChild(t);
  document.body.style.fontFamily = conf.fontName;
  return;
}

// Runtime util for what time it is
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

// Runtime for adding zeroes to times that are missing zeroes
function addZero(i) {
  if (i <= 9) {
    return `0${i}`;
  } else {
    return i;
  }
}

// Runtime util for the time elapsed
function elapsed() {
  setInterval(() => {
    var a, b;
    var e = performance.now(); // Get time every second
    var tDiff = Math.round(e / 1000); // Bring into seconds from ms
    a = tDiff / 60; // Solve s to m
    a = Math.floor(a); // Round down to smallest m (good for fractionslike 5/3)
    b = tDiff % 60; // Rounds seconds and keeps under 60.
    document.getElementById('time').innerHTML = `${a}m${b}s elapsed.`; // Set elapsed on page
  }, 1000);
}

// Runtime bit in case the logo is missing
function logo() {
  document.getElementsByClassName('server-logo')[0].style.display = "none";
  document.getElementById('server-name').style.display = "block";
}

// Runtime check to remove the header where wanted
function header() {
  if (!conf.noheadertext) return; // Cancels if not enabled
  document.getElementById('server-name').style.display = "none";
}

// Runtime util for the music engine
function music() {
  // This function ensures there is data to provide to the respective music engines
  if (conf.yt === "" && conf.sc === "") // No values for either source
    return console.error("[DIVERGENCE] Either you misconfigured your music, or you aren't using it. Please disable such in js/script.js to resolve this error.");
  if (conf.yt !== "" && conf.sc !== "") // Values for both sources
    return console.error("[DIVERGENCE]] You provided both a Soundcloud and YouTube playlist");
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
            document.getElementById("mute").innerHTML = "Zmáčky mezerník pro odtlumení hudby.";
          } else if (a === false) {
            document.getElementById("mute").innerHTML = "Press spacebar to unmute the audio.";
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