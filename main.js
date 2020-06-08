const body = document.querySelector('body');
const WIDTH = window.innerWidth;
const introText = document.querySelector('.intro-text');
const btnContainer = document.querySelector('.btn-container');
const numberInput = document.querySelector('.number-select');
const hiddenDiv = document.querySelector('.btn-container--time');
const span = document.getElementById('sec');

function pleasureUser() {
  navigator.vibrate(100);
  console.log('Pleasuring');
}

const loveBtn = document.querySelector('.love-btn');

loveBtn.addEventListener('touchstart', () => {
  loveBtn.classList.add('love-btn', 'love-btn--pressed');
  let value = numberInput.value;
  if (value) {
    if (!(value < 5 || value > 60)) {
      introText.innerText = 'the pleasure you deserve.';
      let milliseconds = value * 1000;
      navigator.vibrate(milliseconds);
      numberInput.value = '';
      console.log(value);
    } else {
      introText.innerText = 'En az: 5, en fazla: 60';
      numberInput.value = '';
    }
  } else {
    introText.innerText = 'BoS olmasIn!';
  }
});

loveBtn.addEventListener('touchend', () => {
  loveBtn.setAttribute('class', 'love-btn');
});

if (WIDTH > 768) {
  introText.innerText = "Doesn't work for pc :/";
  btnContainer.style.display = 'none';
}
