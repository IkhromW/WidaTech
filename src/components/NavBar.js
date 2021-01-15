import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-blue-800 shadow-lg">
      <div className="container mx-auto">
        <div className="sm:flex justify-around">
          <Link to="/" className="text-white text-3xl font-bold p-3">
            WidaTech
          </Link>
          <ul className="text-gray-400 sm:self-center text-xl border-t sm:border-none">
            <li className="sm:inline-block">
              <Link to="/" className="p-3 text-white hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li className="sm:inline-block">
              <Link to="/add" className="p-3 text-white hover:text-yellow-300">
                Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
