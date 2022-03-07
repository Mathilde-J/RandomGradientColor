import { DIRECTION_TO, CHANGE_FIRST_COLOR, CHANGE_LAST_COLOR } from '../actions/gradient';

// reducer : fonction qui fournit le nouveau state à partir du state actuel et
// d'une action. C'est l'assistant du store (en vrai c'est un peu lui qui fait tout
// le boulot, le store se contente de lui transmettre action et state, puis il
// récupère le nouveau state et remplace le state d'avant)

// le reducer va traduire l'action en changements des informations du state

// action : c'est pour demander une modification sur le state, par exemple
// "passe le nombre de couleurs à 5"

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

// eslint-disable-next-line arrow-body-style
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DIRECTION_TO:

      switch (action.angle) {
        case `${action.angle}`:
          return {
            ...state,
            direction: action.angle,
          };
        default: return state;
      }

    case CHANGE_FIRST_COLOR:
      return {
        ...state,
        // on peut se servir d'une information du state actuel
        nbColors: state.nbColors + 1,
        firstColor: action.color,
      };

    case CHANGE_LAST_COLOR:
      return {
        ...state,
        // on peut se servir d'une information du state actuel
        nbColors: state.nbColors + 1,
        lastColor: action.color,
      };

    default: return state;
  }
};
export default reducer;

// quand le store est créé, il ne contient pas encore de state. Il va faire appel
// au reducer avec un state vide (undefined) et une action spéciale "INIT"

// paramètre par défaut pour une fonction : si la fonction est appelée avec ce
// paramètre qui n'a pas de valeur, alors dans le corps de la fonction la valeur
// par défaut sera utilisée pour ce paramètre

// si on appelle la fonction reducer avec un paramètre state undefined :
// reducer(undefined, "INIT")
// => quand on écrit "return state", en fait ça va retourner initialState

/*
if (laVariable === 1) {
  console.log('A');
} else if (laVariable === 2) {
  console.log('B');
} else {
  console.log('C');
}

switch : aiguillage entre des traitements par rapport à la valeur d'une variable

switch (laVariable) {
  case 1 : console.log('A');
  case 2 : console.log('B');
  default: console.log('C');
}
*/
