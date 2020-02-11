import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";
import ErrorBoundary from "./components/error-boundary";
import BookStoreService from "./services/bookstore-service";
import { BookStoreServiceProvider } from "./components/bookstore-service-context";
import store from "./store";

const bookStoreService = new BookStoreService();

// error boundary should be inside Provider, for error boundary may take data from provider

ReactDOM.render(
  // The <Provider /> from react-redux makes the Redux store available to any nested components that have been wrapped in the connect() function.
  <Provider store={store}>
    <ErrorBoundary>
      <BookStoreServiceProvider value={bookStoreService}>
        <Router>
          <App />
        </Router>
      </BookStoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
