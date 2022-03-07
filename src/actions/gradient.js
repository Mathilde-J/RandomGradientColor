// annuaire des actions

// === action types

export const DIRECTION_TO = 'DIRECTION_TO';
export const CHANGE_FIRST_COLOR = 'CHANGE_FIRST_COLOR';
export const CHANGE_LAST_COLOR = 'CHANGE_LAST_COLOR';

// === action creators
// fonction qui permet de créer une action du type indiqué => fonction qui retourne
// une nouvelle action
export const changeFirstColor = (newColor) => (

  {
    type: CHANGE_FIRST_COLOR,
    color: newColor,
  }

);

export const changeLastColor = (newColor) => (

  {
    type: CHANGE_LAST_COLOR,
    color: newColor,
  }

);

export const changeDirection = (direction) => (

  {
    type: DIRECTION_TO,
    angle: direction,
  }

);
