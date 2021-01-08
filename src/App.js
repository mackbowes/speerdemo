import React from 'react';
import { ChakraProvider, extendTheme} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import Payment from './Pages/Payment';

function App() {


  return (
    <Router>
      <ChakraProvider>
        <Switch>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
