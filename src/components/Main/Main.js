import React from "react";
// import { Link } from "react-router-dom";

import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";

function Main() {
    return (
        <>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        </>
    );
}

export default Main;