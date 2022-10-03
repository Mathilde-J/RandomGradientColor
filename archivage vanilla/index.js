// == Imports
import store from 'src/store';
import { DIRECTION_TO, changeLastColor, changeFirstColor, changeDirection } from './actions/gradient';

import { randomHexColor, generateSpanColor } from './utils';

// console.log(store.getState());

function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}

function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

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

renderNbColors();
renderGradient();
renderColors();

store.subscribe(() => {
  console.log('le state a changé');

  renderNbColors();
  renderGradient();
  renderColors();
});

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    console.log('Random all colors');

    // const action = {
    //   type: CHANGE_FIRST_COLOR,
    //   color: randomHexColor(),
    // };
    // store.dispatch(action);

    const action = changeFirstColor(randomHexColor());
    store.dispatch(action);

    // // on peut ausi écrire sans variable intermédiaire
    // store.dispatch({
    //   type: CHANGE_LAST_COLOR,
    //   color: randomHexColor(),
    // });
    store.dispatch(changeLastColor(randomHexColor()));

    // ui
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    const newColor = randomHexColor();

    // const action = {
    //   type: 'CHANGE_FIRST_COLOR',
    //   color: newColor,
    // };
    const action = changeFirstColor(newColor);
    store.dispatch(action);
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    // const action = {
    //   type: 'CHANGE_LAST_COLOR',
    //   color: randomHexColor(),
    // };
    store.dispatch(changeLastColor(randomHexColor()));
  });

document.getElementById('to45deg')
  .addEventListener('click', () => {
    // const action = {
    //   type: DIRECTION_TO,
    //   angle: '45deg',
    // };

    store.dispatch(changeDirection('45deg'));
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    // const action = {
    //   type: DIRECTION_TO,
    //   angle: '90deg',
    // };

    store.dispatch(changeDirection('90deg'));
  });

document.getElementById('to135')
  .addEventListener('click', () => {
    // const action = {
    //   type: DIRECTION_TO,
    //   angle: '135deg',
    // };

    store.dispatch(changeDirection('135deg'));
  });

document.getElementById('to225')
  .addEventListener('click', () => {
    // const action = {
    //   type: DIRECTION_TO,
    //   angle: '225deg',
    // };

    // store.dispatch(action);
    store.dispatch(changeDirection('225deg'));
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    // const action = {
    //   type: DIRECTION_TO,
    //   angle: '270deg',
    // };

    // store.dispatch(action);
    store.dispatch(changeDirection('270deg'));
  });

document.getElementById('to315')
  .addEventListener('click', () => {
    // const action = {
    //   type: DIRECTION_TO,
    //   angle: '315deg',
    // };

    // store.dispatch(action);
    store.dispatch(changeDirection('315deg'));
  });
