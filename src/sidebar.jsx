import { ChevronDown, ChevronRight, Menu, UserCircle, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to toggle sidebar */}
      <button onClick={toggleSidebar} className="sm:hidden">
        {isOpen ? (
          <X color="black" className="text-2xl" />
        ) : (
          <Menu color="white" className="text-2xl " />
        )}
      </button>


      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen max-h-screen bg-slate-100 text-white w-72 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-900 ease-in-out overflow-y-auto z-50`}
      >
        <div className="bg-amazonclone-Light_blue   p-2 border-y border-gray-700">
          <div className="flex gap-2 ml-5 ">
            {" "}
            <UserCircle size={30} className="text-black" />
            <p className=" font-bold text-lg text-black "> Mon Porfolio</p>
          </div>
        </div>
        <div className="p-4">
         
          <div className="sm:hidden mt-4">
            <a
              href="#home"
              className="block text-black py-2 "
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-black py-2 "
            >
              About
            </a>
            <a
              href="#exp"
              className="block text-black py-2 "
            >
              Experience
            </a>
            <a
              href="#serv"
              className="block text-black py-2 "
            >
              Services
            </a>
            <a
              href="#pro"
              className="block text-black py-2 "
            >
              Projects
            </a>
            <a
              href="#ctc"
              className="block text-black py-2 "
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Overlay (optional) */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
