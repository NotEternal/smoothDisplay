'use strict';

// test filling
for (let i = 0; i < 40; i += 1) {
  const div = document.createElement('div');

  div.className = 'intro__item';
  document.querySelector('.intro').appendChild(div);
}

const arrAnimateElements = [...document.querySelectorAll('.intro__item')];
const coordinatesAnimateElements = [];

arrAnimateElements.map((item) => {
  item.style.visibility = 'hidden';
  item.style.opacity = '0';

  coordinatesAnimateElements.push(Math.floor(item.getBoundingClientRect().top));
});

visibleElements();
window.addEventListener('scroll', visibleElements);

function visibleElements() {
  setInterval(() => {
    for (let i = 0; i < coordinatesAnimateElements.length; i += 1) {
      if (
        coordinatesAnimateElements[i] <
          pageYOffset + document.documentElement.clientHeight - 300 &&
        coordinatesAnimateElements[i] > pageYOffset - 200
      ) {
        arrAnimateElements[i].style.visibility = 'visible';
        arrAnimateElements[i].style.opacity = '1';
      } else {
        arrAnimateElements[i].style.visibility = 'hidden';
        arrAnimateElements[i].style.opacity = '0';
      }
    }
  }, 100);
}
