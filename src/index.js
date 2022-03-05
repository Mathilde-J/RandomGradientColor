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
    linear-gradient(${direction}deg,${firstColor},${lastColor})
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

// == Controls
// document.getElementById('randAll')
//   .addEventListener('click', () => {
//     // debug
//     console.log('Random all colors');

//     // data
//     // on dispatch une action CHANGE_FIRST_COLOR et une action CHANGE_LAST_COLOR
//     const action = {
//       type: 'CHANGE_FIRST_COLOR',
//       color: randomHexColor(),
//     };
//     store.dispatch(action);

//     // on peut ausi écrire sans variable intermédiaire
//     store.dispatch({
//       type: 'CHANGE_LAST_COLOR',
//       color: randomHexColor(),
//     });

//     // ui
//   });

// document.getElementById('randFirst')
//   .addEventListener('click', () => {
//     const newColor = randomHexColor();

//     /*
//     une action c'est un objet qui contient au minimum une propriété "type".
//     Il peut contenir aussi d'autres propriétés : on appelle ces informations
//     le payload ("chargement") de l'action
//     */
//     const action = {
//       type: 'CHANGE_FIRST_COLOR',
//       color: newColor,
//     };
//     store.dispatch(action);
//   });

// document.getElementById('randLast')
//   .addEventListener('click', () => {
//     const action = {
//       type: 'CHANGE_LAST_COLOR',
//       color: randomHexColor(),
//     };
//     store.dispatch(action);
//   });

// document.getElementById('toLeft')
//   .addEventListener('click', () => {
//     // une action c'est une intention
//     // "store, change la direction pour aller vers la gauche"

//     // une action c'est un objet qui contient l'intention dans sa propriété "type"

//     // on veut appliquer un changement sur le state : on envoie une action au
//     // store (dispatch), le store transmettra l'action au reducer avec aussi le
//     // state actuel. En fait, le reducer se débrouillera pour traduire l'intention
//     // en modifications sur le state

//     const action = {
//       type: 'DIRECTION_TO_LEFT',
//     };

//     // on envoie l'action vers le store => dispatch
//     store.dispatch(action);
//   });

// document.getElementById('toRight')
//   .addEventListener('click', () => {
//     const action = {
//       type: 'DIRECTION_TO_RIGHT',
//     };

//     // on envoie l'action vers le store => dispatch
//     store.dispatch(action);
//   });

// document.getElementById('toTop')
//   .addEventListener('click', () => {
//     const action = {
//       type: 'DIRECTION_TO_TOP',
//     };

//     // on envoie l'action vers le store => dispatch
//     store.dispatch(action);
//   });

document.getElementById('toRotate')
  .addEventListener('click', () => {
    const action = {
      type: 'ROTATE',
      rotate: 45,
    };
    store.dispatch(action);
  });
