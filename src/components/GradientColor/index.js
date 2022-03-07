import { useSelector } from 'react-redux';

const GradientColor = () => {
  const firstColor = useSelector((state) => (state.firstColor));
  const lastColor = useSelector((state) => (state.lastColor));
  const direction = useSelector((state) => (state.direction));

  // en React on peut utiliser "style" => il faut fournir un objet qui contient le
  // CSS écrit en JS (CSS-in-JS)

  return (
    <>
      {/* c'est horrible cette syntaxe
    avec les spans et styles */}
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
