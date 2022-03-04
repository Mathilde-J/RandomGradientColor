// pour une application React avec peu de fonctionnalités, la solution "state dans
// App" fonctionne bien. Avec l'augmentation des fonctionnalités de l'application,
// ça devient le bazar dans App, beaucoup de code, difficile à maintenir
// => on va sortir le state de notre application, le stocker dans un store (par
// exemple un store Redux)

// le store est le "gardien" de notre state : il le stocke et il le protège (il
// autorisera seulement certaines modifications)

// https://redux.js.org/api/createstore

import { createStore } from 'redux';

import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from './reducer';

const store = createStore(
  // reducer
  reducer,
  // enhancer
  devToolsEnhancer(),
);
export default store;
