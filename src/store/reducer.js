import { DIRECTION_TO, CHANGE_FIRST_COLOR, CHANGE_LAST_COLOR } from '../actions/gradient';

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
        nbColors: state.nbColors + 1,
        firstColor: action.color,
      };

    case CHANGE_LAST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        lastColor: action.color,
      };

    default: return state;
  }
};
export default reducer;