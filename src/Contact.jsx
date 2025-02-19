import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Contact() {

  const handleClick = () => {
    window.location.href = "https://github.com/The-WebJunior"; // Redirige vers l'URL
  };
  const handleClick2 = () => {
    window.location.href =
      "https://www.linkedin.com/in/haowa-fall-85b5a32a0/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"; // Redirige vers l'URL
  };

  return (
    <section
      id="ctc"
      className="flex text-white flex-col  justify-center items-center"
    >
      <h1 className="lg:text-lg text-xs">Entrer en Contact</h1>
      <p className="font-extrabold lg:text-4xl text-xl">Contactez-moi</p>

      {/* Formulaire de contact */}
      <div className="mt-10  w-full  ">
        <form className="space-y-6 flex flex-wrap max-sm:flex-col max-sm:items-center justify-evenly">
          {/* Champ Nom */}
          <div className="w-1/3 max-sm:w-72 mb-10">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full  py-2 border border-gray-300 rounded-md shadow-sm  text-black"
            />

            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  text-black"
            />

            <label
              htmlFor="subject"
              className="block text-sm font-medium text-white"
            >
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm f text-black"
            />
          </div>

          <div className="w-1/3 max-sm:w-72 space-y-4">
            {/* Champ Message */}

            <label
              htmlFor="message"
              className="block -mt-6 text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 block w-full px-3 p-3 py-2 border border-gray-300 rounded-md shadow-sm  text-black"
            />

            {/* Bouton de soumission */}
            <div>
              <button
                type="submit"
                className="w-full hover:shadow-[0_0_60px_5px_rgba(93,233,226,0.6)] border  border-[hsl(177,53%,32%)] flex justify-center py-2 px-4  rounded-md shadow-sm text-sm font-medium  bg-black  text-[hsl(177,100%,50%)]"
              >
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Section des contacts existants */}
      <div className="flex mb-4 flex-col justify-center items-center ">
        <div className=" mt-20 flex gap-8  p-4 rounded-lg ">
        
      

          <button
            className=" w-9 h-9  bg-black  p-2 rounded-full hover:bg-[hsl(177,100%,50%)] hover:text-shadow-lg hover:shadow-[0_0_15px_20px_rgba(93,233,226,0.6)] border border-[hsl(177,100%,50%)]  text-[hsl(177,100%,50%)] hover:text-white "
            onClick={handleClick2}
          >
            <Linkedin className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
          </button>
          <button
            className="
               bg-black  w-9 h-9 p-2 rounded-full border border-[hsl(177,100%,50%)]  hover:bg-[hsl(177,100%,50%)] hover:text-shadow-lg hover:shadow-[0_0_15px_20px_rgba(93,233,226,0.6)] text-[hsl(177,100%,50%)] hover:text-white"
            onClick={handleClick}
          >
            <Facebook className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
          </button>
          <button
            className="
               bg-black  w-9 h-9 p-2 rounded-full border border-[hsl(177,100%,50%)]  hover:bg-[hsl(177,100%,50%)] hover:text-shadow-lg hover:shadow-[0_0_15px_20px_rgba(93,233,226,0.6)] text-[hsl(177,100%,50%)] hover:text-white"
            onClick={handleClick}
          >
            <Instagram className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
          </button>
          <button
            className=" bg-black  w-9 h-9 p-2 border border-[hsl(177,100%,50%)]  rounded-full hover:bg-[hsl(177,100%,50%)] hover:text-shadow-lg hover:shadow-[0_0_15px_20px_rgba(93,233,226,0.6)] text-[hsl(177,100%,50%)] hover:text-white"
            onClick={handleClick}
          >
            <Github className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
          </button>
        </div>
        
          <div className="flex gap-6 mb-10">
            <p>Home</p>
            <p>About</p>
            <p>Experience</p>
            <p>Projects</p>
          </div>
          <div className="flex gap-2 mb-10 border rounded-full p-2 hover:shadow-[0_0_60px_5px_rgba(93,233,226,0.6)]  border-[hsl(177,53%,32%)]">
            <Mail className="w-5 h-5 max-sm:w-4 max-sm:h-4  mt-1.5" />haowa181299@gmail.com
          </div>

          <p className="text-[hsl(177,100%,50%)]">© . Tous droits réservés.</p>
      </div>
    </section>
  );
}
