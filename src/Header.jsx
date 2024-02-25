import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-center ">
        <div className="text-black flex items-center mx-4">
          <img className="mx-2 h-8 w-8" src="" alt="" />
          <h2 className="text-xl">Logo</h2>
        </div>
        <ul className="flex justify-center items-center ">
          <li>
            <Link to="#" className="text-purple-500 flex items-center hover:text-purple-300 mx-4">
              <h2 className="text-xl">Today's Luck</h2>
              <img src="" className="h-4 w-4 ml-1" alt="luck" />
            </Link>
          </li>
          <li>
            <Link to="#" className="text-purple-800 flex items-center hover:text-purple-200 mx-4">
              <h2 className="text-xl">Shopping</h2>
              {/* <FontAwesomeIcon icon={faCart} /> */}
            </Link>
          </li>
          <div className="relative">
            <input
              type="text"
              placeholder="Find Your Divine Connection..."
              className="border bg-purple-300 border-purple-800 px-2 py-1 rounded-md text-purple-500 pl-8 mx-4"
            />
            <FontAwesomeIcon icon={faSearch} className="absolute top-0 left-0 mt-2 ml-5 text-purple-500" />
          </div>
          <li>
            <Link to="#" className="text-purple-800 hover:text-purple-600 mx-4">
              <h2 className="text-xl">Login/</h2>
            </Link>
          </li>
          <li>
            <Link to="#" className="text-purple-800 hover:text-purple-600 mx-4">
              <h2 className="text-xl">Register</h2>
            </Link>
          </li>
        </ul>

        <div className="mx-4">
          <select
            className="border border-purple-300 rounded-md px-2 py-1"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
        <div className="mx-4">
          <Link to="#"><FontAwesomeIcon icon={faBell} className="text-purple-300" /></Link>
        </div>
        <div className="mx-4">
          <Link to="#"><FontAwesomeIcon icon={faUser} className="text-purple-300" /></Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
