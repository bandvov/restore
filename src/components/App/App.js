import React, { useState,useEffect } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../pages";
import Header from "../Header/Header";
import { connect } from "react-redux";

const App = ({ numItems, total }) => {

  return (
    <main role="main" className="container">
      <Header numItems={numItems} total={total} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
      
    </main>
  );
};

const mapStateToProps = state => {
  return {
    numItems: state.shoppingCart.countTotal,
    total: state.shoppingCart.orderTotal
  };
};

export default connect(mapStateToProps)(App);
