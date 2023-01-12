import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./ingeal";
import { Header } from "./ingeal/components/Heard";
import { IngealRouter } from "./routers";
import { store } from "./store";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
        <Header/>
          <IngealRouter />
          <Footer/>
        </BrowserRouter>
      </Provider>
    </>
  );
};
