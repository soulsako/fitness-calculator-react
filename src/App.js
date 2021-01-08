import React from "react";
import Stepper from "./components/Stepper";
import Header from './Header';
import Loading from './Loading';
import ThemeHOC from './ThemeHOC'

const App = () => (
  <ThemeHOC>
    <Loading>
      <Header />
      <Stepper />
    </Loading>
  </ThemeHOC>
);
export default App;
