function play(letter) {
  let audio = document.getElementById(letter);
  audio.play();
  document.getElementById("display").innerText = "Drum " + letter
}

window.document.onkeyup = function(event) {
  let keyPressed = event.key.toUpperCase()
  play(keyPressed);
  console.log(keyPressed)
}
