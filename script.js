let number = document.getElementById('counter');
let count = 0;

document.querySelector('.resetBtn').addEventListener('click', () => {
  count = 0;
  number.innerHTML = count;
});

document.querySelector('.increaseBtn').addEventListener('click', () => {
  count += 1;
  number.innerHTML = count;
});

document.querySelector('.decreaseBtn').addEventListener('click', () => {
  count -= 1;
  number.innerHTML = count;
});