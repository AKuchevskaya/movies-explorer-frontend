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
    <>
    {loggedIn ? <AuthHeader /> : <Header />}
      
      <main className='main__container'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
