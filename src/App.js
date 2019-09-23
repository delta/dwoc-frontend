/* @flow */

import React from 'react';
import './App.css';
import LandingPage from './views/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GraphQLClient, ClientContext } from 'graphql-hooks'

const client = new GraphQLClient({
  url: 'https://aaveg.net/prisma/'
})


function App() {
  return (
     <ClientContext.Provider value={client}>
    <div className="App">
      <div className="App-header">
        <LandingPage />
      </div>
    </div>
     </ClientContext.Provider>
  );
}

export default App;
