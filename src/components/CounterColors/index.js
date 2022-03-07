import { useSelector } from 'react-redux';

const CounterColors = () => {
  // const nbColorsFromState = useSelector((state) => (state.nbColors));

  // eslint-disable-next-line arrow-body-style
  // eslint-disable-next-line arrow-body-style
  const selectNbFromState = (state) => {
    return state.nbColors;
  };

  const nbColorsFromState = useSelector(selectNbFromState);

  return (
    <div id="nbColors">
      {nbColorsFromState} couleur(s) générée(s)
    </div>
  );
};

export default CounterColors;
