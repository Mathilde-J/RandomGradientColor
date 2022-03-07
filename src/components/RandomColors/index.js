import { useDispatch } from 'react-redux';
import { randomHexColor } from 'src/utils';
import { changeFirstColor, changeLastColor } from '../../actions/gradient';

const RandomColors = () => {
  const dispatch = useDispatch();

  return (
    <div className="buttons group">

      <button
        type="button"
        className="button"
        id="randFirst"
        onClick={() => {
          const newColor = randomHexColor();
          const action = changeFirstColor(newColor);
          dispatch(action);
        }}
      >
        Random First
      </button>

      <button
        type="button"
        className="button"
        id="randAll"
        onClick={() => {
          const newColorFirst = randomHexColor();
          const actionFist = changeFirstColor(newColorFirst);
          dispatch(actionFist);

          const newColorLast = randomHexColor();
          const actionLast = changeLastColor(newColorLast);
          dispatch(actionLast);
        }}
      >
        Random All
      </button>

      <button
        type="button"
        className="button"
        id="randLast"
        onClick={() => {
          const newColor = randomHexColor();
          const actionLast = changeLastColor(newColor);
          dispatch(actionLast);
        }}
      >
        Random Last
      </button>
    </div>
  );
};

export default RandomColors;
