// створюємо змінні для кнопок
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let colorInterval = null;
btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener("click", () => {
    btnStart.disabled = true;
    btnStop.disabled = false;
  colorInterval = setInterval(() => {
      document.body.style.background = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener("click", () => {
    btnStart.disabled = false;
    btnStop.disabled = true;
    clearInterval(colorInterval);
   
});

