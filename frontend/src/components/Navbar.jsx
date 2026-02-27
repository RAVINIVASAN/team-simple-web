import { useState } from "react";

function Navbar() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.className = dark ? "light" : "dark";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand fw-bold">DevTeam</span>
      <button onClick={toggleTheme} className="btn btn-outline-light ms-auto">
        Toggle Theme
      </button>
    </nav>
  );
}

export default Navbar;