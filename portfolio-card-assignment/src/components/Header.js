import React from 'react';

function Header({ name, title }) {
  return (
    <div className="header">
      <h1>{name}</h1>
      <h2>{title}</h2>
    </div>
  );
}

export default Header;