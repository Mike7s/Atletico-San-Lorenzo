import React, { useState } from "react";
import Palmares from "../palmares.json";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type Palmares = {
  year: number;
  title: string;
  details: string;
};

const PalmaresList: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-center">
      <h1
        className="font-urbanist text-4xl mb-4 cursor-pointer"
        onClick={toggleList}
      >
        Palmares
      </h1>

      <button
        onClick={toggleList}
        aria-expanded={isOpen}
        className="focus:outline-none mb-4"
      >
        <span className="sr-only">togglePalmares</span>
        {isOpen ? (
          <> 
            <span className="sr-only">chiudi palmares</span>
          <FaChevronUp className="mx-auto text-2xl" />
          </>
        ) : (
          <>
          <span className="sr-only">chiudi palmares</span>
          <FaChevronDown className="mx-auto text-2xl" />
          </>
        )}
      </button>

      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="list-none p-0 mt-4">
          {Palmares.palmares.map((item: Palmares, index: number) => (
            <li key={index} className="flex items-center  mb-4 p-4 bg-gray-800 text-white rounded-lg">
              <span className="block w-20 font-bold text-lg">{item.year}</span>
              <div className="ml-4">
                <strong>{item.title}:</strong> {item.details}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PalmaresList;
