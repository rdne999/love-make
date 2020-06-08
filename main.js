function pleasureUser() {
  navigator.vibrate([10000]);
}

const loveBtn = document.querySelector('.love-btn');

loveBtn.addEventListener('click', pleasureUser);
