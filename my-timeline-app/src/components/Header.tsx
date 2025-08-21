import React from 'react';

interface HeaderProps {
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  return (
    <header>
      <img
        src="/a-black-and-white-image-of-a-clock-and-arrow-vector.jpg"
        alt="logo"
        height="40"
      />
      <button id="theme-toggle" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </header>
  );
};

export default Header;
