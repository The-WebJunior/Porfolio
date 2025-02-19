import Sidebar from "./sidebar";

export default function Navbar() {
  return (
    <div className="flex">
      <nav className="fixed bg-[rgba(47,39,39,0.5)] w-full p-2">
        <div className="flex gap-96 sm:flex-row   items-center">
          <div className="flex gap-2  ">
            <span className="mt-3">
              <Sidebar />
            </span>
            <p className=" flex gap-3 max-sm:text-center font-bold text-xl   text-white mt-2  ">
          
            <span className="text-[#5de9e2d6] text-shadow-lg  transition-all duration-300">
            Profolio</span>
            </p>
          </div>
          <div className="hidden sm:flex text-md gap-5 p-2  text-white">
            {/* Navigation Items with Hover Effect */}
            <a
              href="#home"
              className="relative group hover:text-[hsl(177,100%,50%)] hover:text-shadow-lg   font-bold"
            >
              Home
              <span className="absolute left-0 right-0 bottom-0 block w-full h-0.5 bg-transparent  group-hover:bg-[#5de9e2d6] transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className="relative group hover:text-[hsl(177,100%,50%)] hover:text-shadow-lg font-bold"
            >
              About
              <span className="absolute left-0 right-0 bottom-0 block w-full h-0.5 bg-transparent  group-hover:bg-[#5de9e2d6] transition-all duration-300"></span>
            </a>
            <a
              href="#exp"
              className="relative group hover:text-[hsl(177,100%,50%)] hover:text-shadow-lg font-bold "
            >
              Experience
              <span className="absolute left-0 right-0 bottom-0 block w-full h-0.5 bg-transparent   group-hover:bg-[#5de9e2d6] transition-all duration-300"></span>
            </a>
            {/* <a
              href="#serv"
              className="relative group hover:text-[hsl(177,100%,50%)] hover:text-shadow-lg font-bold"
            >
              Services
              <span className="absolute left-0 right-0 bottom-0 block w-full h-0.5 bg-transparent  group-hover:bg-[#5de9e2d6] transition-all duration-300"></span>
            </a> */}
            <a
              href="#pro"
              className="relative group hover:text-[hsl(177,100%,50%)] hover:text-shadow-lg font-bold "
            >
              Projects
              <span className="absolute left-0 right-0 bottom-0 block w-full h-0.5 bg-transparent  group-hover:bg-[#5de9e2d6] transition-all duration-300"></span>
            </a>
            <a
              href="#ctc"
              className="relative group hover:text-[hsl(177,100%,50%)] hover:text-shadow-lg font-bold"
            >
              Contact
              <span className="absolute left-0 right-0 bottom-0 block w-full h-0.5 bg-transparent  group-hover:bg-[#5de9e2d6]   transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
