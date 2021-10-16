import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout';
import BookingScreen from './screens/BookingScreen';
import ComingSoon from './screens/ComingSoon';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Route path="/booking" component={BookingScreen} exact></Route>  
          <Route path="/" component={ComingSoon} exact></Route>  
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
