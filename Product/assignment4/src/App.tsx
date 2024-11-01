// import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { mainRoute } from './Router/mainRoute';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { PersistGate } from 'redux-persist/integration/react';
import  persistStore  from 'redux-persist/es/persistStore';
import { store } from './global/Store';
import { Provider } from 'react-redux';

let client = new QueryClient()

let persist = persistStore(store)

const App = () => {
  return (
    <div>
       <Provider store={store}>  
      <PersistGate loading={null} persistor={persist}>
       <QueryClientProvider client={client}>
      <RouterProvider router={mainRoute}/>
      </QueryClientProvider> 
      </PersistGate> 
      </Provider>
    </div>
  );
}

export default App;
