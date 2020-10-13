'use strict';

// test filling
for (let i = 0; i < 40; i += 1) {
  const div = document.createElement('div');

  div.className = 'intro__item';
  div.textContent = i + 1;
  document.querySelector('.intro').appendChild(div);
}

const arrAnimateElements = [...document.querySelectorAll('.intro__item')];
const coordinatesAnimateElements = arrAnimateElements.map((item) => {
  return Math.floor(item.getBoundingClientRect().top);
});

visibleElements();
window.addEventListener('scroll', visibleElements);

function visibleElements() {
  setTimeout(() => {
    for (let i = 0; i < coordinatesAnimateElements.length; i += 1) {
      if (
        coordinatesAnimateElements[i] <
          pageYOffset + document.documentElement.clientHeight - 300 &&
        coordinatesAnimateElements[i] > pageYOffset - 200
      ) {
        showElement(arrAnimateElements[i]);
      } else {
        hideElement(arrAnimateElements[i]);
      }
    }
  }, 30);
}

function hideElement(elem) {
  elem.style.visibility = 'hidden';
  elem.style.opacity = '0';
}

function showElement(elem) {
  elem.style.visibility = 'visible';
  elem.style.opacity = '1';
}
