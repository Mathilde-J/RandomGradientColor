import { render } from 'react-dom';
import App from 'src/components/App';
import { Provider } from 'react-redux';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
