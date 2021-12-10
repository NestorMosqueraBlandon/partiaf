import React, { useContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import { AuthContext } from './context/auth';
import BookingScreen from './screens/BookingScreen';
import BusinessScreen from './screens/BusinessScreen';
import BuyScreen from './screens/BuyScreen';
import ComingSoon from './screens/ComingSoon';
import CoverScreen from './screens/CoverScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import RegisterScreen from './screens/RegisterScreen';
import SettingsScreen from './screens/SettingsScreen';
import StaffScreen from './screens/StaffScreen';
import StoreScreen from './screens/StoreScreen';

import { AuthProvider } from './context/auth';

function App() {

  const context = useContext(AuthContext)

  const { userInfo } = context;

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          {userInfo ?
            <Layout>
              <Switch>
                <Route path="/" component={BusinessScreen} exact></Route>
                <Route path="/store" component={StoreScreen} exact></Route>
                <Route path="/home" component={BookingScreen} exact></Route>
                <Route path="/booking" component={BookingScreen} exact></Route>
                <Route path="/menu" component={MenuScreen} exact></Route>
                <Route path="/cover" component={CoverScreen} exact></Route>
                <Route path="/buy" component={BuyScreen} exact></Route>
                <Route path="/staff" component={StaffScreen} exact></Route>

              </Switch>
              {/* <Route path="/" component={ComingSoon} exact></Route>   */}
            </Layout>
            :

            <>
              <Route path="/" component={HomeScreen} exact></Route>
              <Route path="/login" component={LoginScreen} exact></Route>
              <Route path="/register" component={RegisterScreen} exact></Route>
              <Route path="/settings" component={SettingsScreen} exact></Route>
            </>
          }

        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
