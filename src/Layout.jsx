import { Send } from "lucide-react";
import { IoHandRightSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      {/* <div className="flex items-center justify-center ">
        <div className="bg- border-violet-700 border-double text-center   shadow-2xl shadow-violet-400 w-2/3  mx-56 rounded-b-full py-48">
          <div
            className="-mt-32
        "
          >
            <p className="font-bold text-white">Software Ingenieur</p>
            <p className="text-6xl font-bold flex ml-48 text-white">
              {" "}
              Hi there
              <IoHandRightSharp className="text-yellow-300   " />, I'm Hawa
            </p>
            <p className="text-xl text-white">
              A developer specialized in frontend development, delivering safe,
              <br /> responsive, and scalable web applications.
            </p>
          </div>
          <Link
            to="/porfolio"
            className=" flex gap-2 text-white bg-zinc-700 rounded-lg p-2 mx-auto w-36 mt-8"
          >
            <p className="font-extrabold text-sm ">GET IN TOUCH</p>
            <Send size={12} className="mt-1" />
          </Link>
        </div>
      </div> */}
    </>
  );
}
