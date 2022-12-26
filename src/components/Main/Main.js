import React from "react";

import "./Main.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "..//Footer/Footer";
import AuthHeader from "../AuthHeader/AuthHeader";

function Main({loggedIn}) {
  return (
    <main className='main__container'>
    {loggedIn ? <AuthHeader /> : <Header />}
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      <Footer />
   </main>
  );
}

export default Main;
