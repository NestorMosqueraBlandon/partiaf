import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import BookingScreen from './screens/BookingScreen';
import BuyScreen from './screens/BuyScreen';
import ComingSoon from './screens/ComingSoon';
import CoverScreen from './screens/CoverScreen';
import MenuScreen from './screens/MenuScreen';
import SettingsScreen from './screens/SettingsScreen';
import StaffScreen from './screens/StaffScreen';
import StoreScreen from './screens/StoreScreen';

function App() {

  const [login, setLogin] = useState(true)

  return (
    <BrowserRouter>
      <div className="App">
        {login? 
        <Layout>
          <Route path="/booking" component={BookingScreen} exact></Route>  
          <Route path="/menu" component={MenuScreen} exact></Route>  
          <Route path="/cover" component={CoverScreen} exact></Route>  
          <Route path="/buy" component={BuyScreen} exact></Route>  
          <Route path="/staff" component={StaffScreen} exact></Route>  
          {/* <Route path="/" component={ComingSoon} exact></Route>   */}
        </Layout>
        :

        <>
          <Route path="/settings" component={SettingsScreen} exact></Route>  
          <Route path="/store" component={StoreScreen} exact></Route>  
        </>
        }

      </div>
    </BrowserRouter>
  );
}

export default App;
