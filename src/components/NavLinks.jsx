import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div>
      <h2>Barra de navegación</h2>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/pokemons">Pokemons</NavLink>
      <br />
      <NavLink to="/acercade">Acerca de</NavLink>
      <br />
    </div>
  );
};

export default NavLinks;
