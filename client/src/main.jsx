import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemePRovider from './components/ThemePRovider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemePRovider>
        <App />
      </ThemePRovider>
    </Provider>
  </PersistGate>
);
