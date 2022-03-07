// == Import
import './styles.css';
import CounterColors from '../CounterColors';
import DirectionsButtons from '../DirectionsButtons';
import GradientColor from '../GradientColor';
import RandomColors from '../RandomColors';

// == Composant
const App = () => (
  <div className="app">
    <CounterColors />
    <RandomColors />
    <GradientColor />
    <DirectionsButtons />

  </div>
);

// == Export
export default App;
