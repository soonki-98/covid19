import React from "react";

const Header = ({ setCountry }) => {
  return (
    <header className="header">
      <h1>covid-19</h1>
      <select className="select">
        <option className="korea" value="kr">
          국내
        </option>
        <option className="japan" value="jp">
          일본
        </option>
      </select>
    </header>
  );
};

export default Header;
