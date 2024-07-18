// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducer';
import DashboardLayout from './components/DashboardLayout';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <DashboardLayout />
      </div>
    </Provider>
  );
};

export default App;
