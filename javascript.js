/* about me */


var opacity = 0;

function aboutFadeUp() {
  if (opacity < 100) {
    opacity += 8;
    setTimeout(function() {
      aboutFadeUp()
    }, 10);
  }
  document.getElementById("about-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.display = "block";
  document.getElementById("about-overlay").style.display = "flex";
  document.getElementById("about-overlay").scrollTop = 0;
  
  if (opacity >= 100) {
    document.getElementById("no-scroll").style.overflow = "hidden";
    document.getElementById('about-overlay').style.overflowY = "scroll";
  }
}

function aboutFadeDown() {
  if (opacity > 0) {
    opacity -= 8;
    setTimeout(function() {
      aboutFadeDown()
    }, 10);
  }
  if (opacity <= 0) {
    document.getElementById("about-overlay").style.display = "none";
    document.getElementById("background-image-overlay").style.display = "none";
    
  }
  console.log(opacity)
  document.getElementById("about-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.opacity = opacity/100;
  document.getElementById("no-scroll").style.overflowY = "scroll";
  document.getElementById('about-overlay').style.overflowY = "hidden";
}



/* --------------------------------------------------- */

/* Speak & Spell */

function speakFadeUp() {
  if (opacity < 100) {
    opacity += 8;
    setTimeout(function() {
      speakFadeUp()
    }, 10);
  }
  document.getElementById("speak-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.display = "block";
  document.getElementById("speak-overlay").style.display = "flex";
  document.getElementById("speak-overlay").scrollTop = 0;
  
  if (opacity >= 100) {
    document.getElementById("no-scroll").style.overflow = "hidden";
    document.getElementById('speak-overlay').style.overflowY = "scroll";
  }
}

function speakFadeDown() {
  if (opacity > 0) {
    opacity -= 8;
    setTimeout(function() {
      speakFadeDown()
    }, 10);
  }
  if (opacity <= 0) {
    document.getElementById("speak-overlay").style.display = "none";
    document.getElementById("background-image-overlay").style.display = "none";
    
  }
  console.log(opacity)
  document.getElementById("speak-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.opacity = opacity/100;
  document.getElementById("no-scroll").style.overflowY = "scroll";
  document.getElementById('speak-overlay').style.overflowY = "hidden";
}

/* --------------------------------------------------- */

/* Music */

function musicFadeUp() {
  if (opacity < 100) {
    opacity += 8;
    setTimeout(function() {
      musicFadeUp()
    }, 10);
  }
  document.getElementById("music-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.display = "block";
  document.getElementById("music-overlay").style.display = "flex";
  document.getElementById("music-overlay").scrollTop = 0;
  
  if (opacity >= 100) {
    document.getElementById("no-scroll").style.overflow = "hidden";
    document.getElementById('music-overlay').style.overflowY = "scroll";
  }
}

function musicFadeDown() {
  if (opacity > 0) {
    opacity -= 8;
    setTimeout(function() {
      musicFadeDown()
    }, 10);
  }
  if (opacity <= 0) {
    document.getElementById("music-overlay").style.display = "none";
    document.getElementById("background-image-overlay").style.display = "none";
    
  }
  console.log(opacity)
  document.getElementById("music-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.opacity = opacity/100;
  document.getElementById("no-scroll").style.overflowY = "scroll";
  document.getElementById('music-overlay').style.overflowY = "hidden";
}
