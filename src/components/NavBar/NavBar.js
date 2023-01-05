import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-slate-800">
      <div
        className="max-w-7xl m-auto text-white
    py-4 flex justify-between items-center
  "
      >
        <span className="px-4 font-medium">
          <Link to="/contacts/allContact">
            <FaPhoneAlt className="inline mr-2 text-xl"></FaPhoneAlt>Contact
            Directory
          </Link>
        </span>
        <button className=" text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-4">
          Add Contact
        </button>
      </div>
    </nav>
  );
}
