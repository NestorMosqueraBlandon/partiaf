import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout';
import BookingScreen from './screens/BookingScreen';
import BuyScreen from './screens/BuyScreen';
import ComingSoon from './screens/ComingSoon';
import CoverScreen from './screens/CoverScreen';
import MenuScreen from './screens/MenuScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Route path="/booking" component={BookingScreen} exact></Route>  
          <Route path="/menu" component={MenuScreen} exact></Route>  
          <Route path="/cover" component={CoverScreen} exact></Route>  
          <Route path="/buy" component={BuyScreen} exact></Route>  
          <Route path="/" component={ComingSoon} exact></Route>  
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
