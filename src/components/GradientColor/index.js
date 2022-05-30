import { useSelector } from 'react-redux';

const GradientColor = () => {
  const firstColor = useSelector((state) => (state.firstColor));
  const lastColor = useSelector((state) => (state.lastColor));
  const direction = useSelector((state) => (state.direction));

  return (
    <>
      <div id="colors">
        <span style={{
          color: firstColor,
        }}
        >
          {firstColor}
        </span>
        -
        <span style={{
          color: lastColor,
        }}
        >
          {lastColor}
        </span>
      </div>

      <div
        id="gradient"
        style={{
          background: `linear-gradient(${direction},${firstColor},${lastColor})`,
        }}
      />

    </>
  );
};

export default GradientColor;
