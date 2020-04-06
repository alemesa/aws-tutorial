import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <nav className="Sidebar">
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/caesar">Asterix and Obelix take on Caesar</Link>
        </li>
        <li>
          <Link to="/cleopatra">Asterix and Obelix : Mission Cleopatra</Link>
        </li>
        <li>
          <Link to="/olympic">Asterix at the Olympic Games</Link>
        </li>
        <li>
          <Link to="/britannia">Asterix and Obelix: God Save Britannia</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
