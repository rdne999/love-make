function pleasureUser() {
  window.navigator.vibrate(200); // vibrate for 200ms
}

const loveBtn = document.querySelector('love-btn');

loveBtn.addEventListener('click', pleasureUser);
