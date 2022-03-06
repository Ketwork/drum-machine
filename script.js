function play(letter) {
  let audio = document.getElementById(letter);
  audio.play();
  document.getElementById("display").innerText = "Drum " + letter
}

window.document.onkeyup = function(event) {
  let drumKeys = /Q|W|E|R|A|S|D|Z|X|C/ ;
  let keyPressed = event.key.toUpperCase()
  if (drumKeys.test(keyPressed)) {
    play(keyPressed);
  }
}
