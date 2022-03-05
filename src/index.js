// == Imports
import store from 'src/store';

import { randomHexColor, generateSpanColor } from './utils';

/* Objectif : faire fonctionner le bouton "random last". Plan d'action :
x dispatch l'action (src/index.js, handler du bouton)
- dans le reducer, mettre en place le traitement pour cette action
*/

// console.log(store.getState());

// == Rendu dans le DOM
function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}

function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  // https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient()
  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}

function renderColors() {
  const { firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

// abonnement aux changements du state : en cas d'appel à dispatch, la callback
// fournie en argument sera automatiquement appelée
store.subscribe(() => {
  console.log('le state a changé');

  // on refait l'affichage
  renderNbColors();
  renderGradient();
  renderColors();
});

const directionType = 'DIRECTION_TO';

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    // debug
    console.log('Random all colors');

    const action = {
      type: 'CHANGE_FIRST_COLOR',
      color: randomHexColor(),
    };
    store.dispatch(action);

    // on peut ausi écrire sans variable intermédiaire
    store.dispatch({
      type: 'CHANGE_LAST_COLOR',
      color: randomHexColor(),
    });

    // ui
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    const newColor = randomHexColor();

    const action = {
      type: 'CHANGE_FIRST_COLOR',
      color: newColor,
    };
    store.dispatch(action);
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    const action = {
      type: 'CHANGE_LAST_COLOR',
      color: randomHexColor(),
    };
    store.dispatch(action);
  });

document.getElementById('to45deg')
  .addEventListener('click', () => {
    const action = {
      type: directionType,
      angle: '45deg',
    };

    store.dispatch(action);
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    const action = {
      type: directionType,
      angle: '90deg',
    };

    store.dispatch(action);
  });

document.getElementById('to135')
  .addEventListener('click', () => {
    const action = {
      type: directionType,
      angle: '135deg',
    };

    store.dispatch(action);
  });

document.getElementById('to225')
  .addEventListener('click', () => {
    const action = {
      type: directionType,
      angle: '225deg',
    };

    store.dispatch(action);
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    const action = {
      type: directionType,
      angle: '270deg',
    };

    store.dispatch(action);
  });

document.getElementById('to315')
  .addEventListener('click', () => {
    const action = {
      type: directionType,
      angle: '315deg',
    };

    store.dispatch(action);
  });
