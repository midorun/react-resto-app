import React from 'react';
import { MainPage, CartPage } from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';

import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div
      style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app"
    >
      <AppHeader />

      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>

    </div>
  )
}

export default App;