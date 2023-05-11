import React from "react";
import { NavLink } from "react-router-dom";
import "../header/header.css";
import Logo from "../../assets/mynzo-logo.png";

const Header = () => {
  return (
    <div className="news-header">
      <a href="/">
        {" "}
        <img src={Logo} className="news-header-logo" />
      </a>
      <ul className="news-header-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "news-header-active"
                : "news-header-unactive"
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookmark"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "news-header-active"
                : "news-header-unactive"
            }
          >
            Bookmark
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
