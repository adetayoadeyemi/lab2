let count = 0;

const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

incrementButton.addEventListener('click', () => {
  count++;
  counterDisplay.innerText = count;
});

decrementButton.addEventListener('click', () => {
  count--;
  counterDisplay.innerText = count;
});

resetButton.addEventListener('click', () => {
  count = 0;
  counterDisplay.innerText = count;
});
