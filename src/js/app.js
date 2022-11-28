const btnFromFirstTask = document.querySelector('.collapse__btn');

let clickCounter = 0;

btnFromFirstTask.addEventListener('click', () => {
  const description = document.querySelector('.collapse__description');
  const text = document.querySelector('.text');
  const { top, bottom } = text.getBoundingClientRect();

  if (clickCounter === 0) {
    clickCounter += 1;
    description.style.maxHeight = `${bottom - top}px`;
    description.style.height = `${bottom - top}px`;
    description.classList.add('collapse__description_show');
  } else {
    description.style.maxHeight = '0px';
    description.classList.remove('collapse__description_show');
    clickCounter = 0;
    setTimeout(() => {
      description.classList.remove('collapse__description_show');
    }, 2000);
  }
});
