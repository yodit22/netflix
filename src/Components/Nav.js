import React, { useState, useEffect } from "react";
import "../css/Nav.css";
import { BsSearch } from "react-icons/bs";
// import { Link } from "react-router-dom";
function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", function () {
        return false;
      });
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z3o32-2c299a83-49a9-44c2-bc23-b0b5070a546b.png/v1/fill/w_1024,h_512,strp/netflix_logo_background__2_by_sixmonthslate_d9z3o32-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xMmM2ZjY4NC1kNDQ3LTQ0NTctODRmYS0xMjAzM2NmZDU4MWVcL2Q5ejNvMzItMmMyOTlhODMtNDlhOS00NGMyLWJjMjMtYjBiNTA3MGE1NDZiLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WKy-rj_8y7ziLuhhtAES7jddy-eUpz6PQQ331bp7rRI"
        alt="Netflix Logo"
      />
      <ul className="Nav-list-left">
        <li>
          <a href="/Home">HOME</a>
          <a href="/TVShows">TVShows</a>
          <a href="/Movies">Movies</a>
          <a href="/News&Popular">News&Popular</a>
          <a href="/MyList">MyList</a>
          <a href="/Browse by Language">Browse by language</a>
        </li>
      </ul>
        <BsSearch className="search-icon" />
        <input type="text" className="search_bar" />
       <ul className="Nav-list-right">
        <li>
          {/* <input className="search" src="../../Icon.jpeg" alt="search" /> */}
          <a href="/Kids">Kids</a>
          <a href="/DVD">DVD</a>
          <a href="/MyList">MyList</a>
        </li>
      </ul>
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar Logo"
      />
    </div>
  );
}
export default Nav;
