import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="top-0 left-0 w-full bg-sanlorenzoRed flex items-center justify-between p-4 z-50">
       
        <div className="flex items-center space-x-4 ml-12">
          <img
            src="/SanLorenzo.png"
            alt="Logo San Lorenzo"
            className="h-10 w-auto"
          />
          <h1 className="text-xl font-bold">Atletico San Lorenzo</h1>
        </div>

        <ul className="hidden md:flex space-x-6 text-white mr-12">
          <li className="font-urbanist cursor-pointer">
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li className="font-urbanist cursor-pointer">
            <Link to="/chiSiamo" className="text-white">
              Chi siamo
            </Link>
          </li>
          <li className="font-urbanist cursor-pointer">
            <Link to="/squadra" className="text-white">
              Squadra
            </Link>
          </li>
          <li className="font-urbanist cursor-pointer">
            <Link to="/contatti" className="text-white">
              Contatti
            </Link>
          </li>
          <li className="font-urbanist cursor-pointer">
            <Link to="/partners" className="text-white">
              Partners
            </Link>
          </li>
        </ul>

        
        <div className="md:hidden mr-6">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>

        {isOpen && (
          <ul className="absolute top-15 left-0 w-full bg-sanlorenzoRed text-white flex flex-col items-center space-y-4 py-4 md:hidden">
            <li className="font-urbanist cursor-pointer">
              <Link to="/" className="text-white" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="font-urbanist cursor-pointer">
              <Link to="/chiSiamo" className="text-white" onClick={toggleMenu}>
                Chi siamo
              </Link>
            </li>
            <li className="font-urbanist cursor-pointer">
              <Link to="/squadra" className="text-white" onClick={toggleMenu}>
                Squadra
              </Link>
            </li>
            <li className="font-urbanist cursor-pointer">
              <Link to="/contatti" className="text-white" onClick={toggleMenu}>
                Contatti
              </Link>
            </li>
            <li className="font-urbanist cursor-pointer">
              <Link to="/partners" className="text-white" onClick={toggleMenu}>
                Partners
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default NavBar;
