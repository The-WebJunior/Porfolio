import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DownloadCV from "./DownloadCV";

export default function Home() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = " Frontend Developer";

  const navigate = useNavigate();

  const handleClick = () => {
    window.location.href = "https://github.com/The-WebJunior"; // Redirige vers l'URL
  };
  const handleClick2 = () => {
    window.location.href =
      "https://www.linkedin.com/in/haowa-fall-85b5a32a0/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"; // Redirige vers l'URL
  };

  useEffect(() => {
    let timeout;

    if (isTyping) {
      // Mode "écriture"
      if (text.length < fullText.length) {
        timeout = setTimeout(() => {
          setText(fullText.substring(0, text.length + 1));
        }, 100);
      } else {
        // Passe en mode "effacement" après avoir fini d'écrire
        timeout = setTimeout(() => setIsTyping(false), 1000);
      }
    } else {
      // Mode "effacement"
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(fullText.substring(0, text.length - 1));
        }, 50);
      } else {
        // Passe en mode "écriture" après avoir effacé
        timeout = setTimeout(() => setIsTyping(true), 500);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, isTyping]);

  return (
    <section className="flex flex-col  mt-32 max-sm:mt-44 px-12">
      <div className="flex max-sm:flex-col flex-row items-center gap-8   justify-between sm:gap-10">
        {/* Text Content */}
        {/* Image */}

        <div className=" flex flex-col gap-4  max-sm:text-center">
          <p className=" flex  gap-4 font-extrabold text-4xl max-sm:text-lg max-sm:pl-10  text-white   ">
            <span> Hi ,it's</span>
            <span className="text-[#5de9e2d6] text-shadow-lg  transition-all duration-300">
              Hawa Alioune Fall
            </span>
          </p>
          <p className="font-semibold text-gray-200 text-sm sm:text-xl">
            I'm a<span className="text-[#5de9e2d6]">{text}</span>
            <span className="blinking-caret">|</span>
          </p>
          <p className="text-white w-1/2 max-sm:w-full max-sm:text-center text-justify mb-10">
            I am a Frontend Developer, holding a Master's degree in Information
            Systems , specialized in the design and development of web
            applications.
          </p>
          {/* Buttons */}
          <div className="flex  max-sm:justify-center    max-sm:flex-row gap-3   ">
            <button className="border border-[hsl(177,100%,50%)] p-2 px-7 hover:shadow-[0_0_60px_5px_rgba(93,233,226,0.6)] text-[hsl(177,100%,50%)]  text-xs max-sm:text-[10px] text-white  font-bold rounded-full">
              <DownloadCV />
            </button>
            <button className="border border-[hsl(177,100%,50%)]  p-2 px-8  hover:shadow-[0_0_60px_5px_rgba(93,233,226,0.6)] text-[hsl(177,100%,50%)]  text-white text-xs max-sm:text-[10px]  font-bold rounded-full">
              Contactez-nous
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3  max-sm:justify-center  mt-3">
            <button
              className=" w-9 h-9  bg-black  p-2 rounded-full hover:bg-[hsl(177,100%,50%)] hover:text-shadow-lg hover:shadow-[0_0_15px_20px_rgba(93,233,226,0.6)] text-[hsl(177,100%,50%)] hover:text-white "
              onClick={handleClick2}
            >
              <Linkedin size={20} />
            </button>
            <button
              className="
               bg-black  w-9 h-9 p-2 rounded-full hover:bg-[hsl(177,100%,50%)] hover:text-shadow-lg hover:shadow-[0_0_15px_20px_rgba(93,233,226,0.6)] text-[hsl(177,100%,50%)] hover:text-white"
              onClick={handleClick}
            >
              <Facebook size={20} />
            </button>
            <button
              className="
               bg-black  w-9 h-9 p-2 rounded-full hover:bg-[hsl(177,100%,50%)] hover:text-shadow-lg hover:shadow-[0_0_15px_20px_rgba(93,233,226,0.6)] text-[hsl(177,100%,50%)] hover:text-white"
              onClick={handleClick}
            >
              <Instagram size={20} />
            </button>
            <button
              className=" bg-black  w-9 h-9 p-2 rounded-full hover:bg-[hsl(177,100%,50%)] hover:text-shadow-lg hover:shadow-[0_0_15px_20px_rgba(93,233,226,0.6)] text-[hsl(177,100%,50%)] hover:text-white"
              onClick={handleClick}
            >
              <Github size={20} />
            </button>
          </div>
        </div>
        <div className="mr-12  max-sm:hidden block">
          <img
            src="image/Elise Fedoroff.jfif"
            className="h-96 w-[100vh] rounded-full hover:shadow-[0_0_60px_10px_rgba(93,233,226,0.6)]   transition-all duration-300"
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
}
