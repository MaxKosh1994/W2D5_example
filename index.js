const container = document.querySelector('#container'); // все селекторы лучше выносить наверх, кроме тех, которые нужны в слушателях
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const clearButton = document.querySelector('.clear');

function addNewWord() {
  const newDiv = document.createElement('div'); // создание элемента
  const index = document.createElement('span');

  newDiv.className = 'rus'; // присваивание класса элементу
  index.className = 'index';

  const allIndexes = document.querySelectorAll('.index');

  index.innerText = allIndexes.length + 1;

  index.addEventListener('click', () => {
    const divToRemove = index.parentNode; // index.parentNode.parentNode...
    divToRemove.remove(); // удаление элемента из DOM

    //! Реализовать обновление индексов
  });

  newDiv.innerText = input.value; // input.value - что в инпуте

  newDiv.prepend(index);

  //! Важное условие создания подсказок
  if (input.value.length > 7) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = input.value + '...more text';

    newDiv.addEventListener('mouseenter', () => {
      tooltip.style.display = 'block';
    });

    newDiv.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });

    newDiv.prepend(tooltip); // добавление в начало
  }

  container.append(newDiv); // добавление в конец

  input.value = ''; // очищаем инпут
}

button.addEventListener('click', addNewWord); // по клику вызов не нужен

input.addEventListener('keydown', (event) => {
  // по enter вызываем функцию
  if (event.key === 'Enter') {
    addNewWord();
  }
});

// Очищение до дефолта (Смельчаки, реализуйте через поиск, если этот вариант слишком прост для самурая)
clearButton.addEventListener('click', () => {
  window.location = '/';
});

const allIndexes = document.querySelectorAll('.index');

// allIndexes.forEach((element, index) => {
//   element.innerText = index + 1;
// });
