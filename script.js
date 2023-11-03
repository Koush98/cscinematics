function toggleMenu() {
  var menu = document.querySelector('.fullscreen-menu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function playMusic() {
    var audio = document.getElementById("myAudio");
    audio.play();