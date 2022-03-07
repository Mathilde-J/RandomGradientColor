import { useDispatch } from 'react-redux';
import { changeDirection } from '../../actions/gradient';

const DirectionsButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className="buttons group">
      <button
        type="button"
        className="button"
        id="to45deg"
        onClick={() => {
          dispatch(changeDirection('45deg'));
        }}
      >
        to 45 deg
      </button>

      <button
        type="button"
        className="button"
        id="toRight"
        onClick={() => {
          dispatch(changeDirection('90deg'));
        }}
      >
        to right (90 deg)
      </button>

      <button
        type="button"
        className="button"
        id="to135"
        onClick={() => {
          dispatch(changeDirection('135deg'));
        }}
      >
        to 135 deg
      </button>

      <button
        type="button"
        className="button"
        id="to225"
        onClick={() => {
          dispatch(changeDirection('225deg'));
        }}
      >
        to 225 deg
      </button>

      <button
        type="button"
        className="button"
        id="toLeft"
        onClick={() => {
          dispatch(changeDirection('270deg'));
        }}
      >
        to left (270 deg)
      </button>

      <button
        type="button"
        className="button"
        id="to315"
        onClick={() => {
          dispatch(changeDirection('315deg'));
        }}
      >
        to 315 deg
      </button>

    </div>
  );
};

export default DirectionsButtons;
