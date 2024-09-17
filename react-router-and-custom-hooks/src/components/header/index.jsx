import React from "react";

function Header() {
  return (
    <header>
      <div>HomePage</div>
      <ul style={{ display: "flex", gap: "20px" }}>
        <li>Recipes</li>
        <li>Comments</li>
      </ul>
    </header>
  );
}

export default Header;
