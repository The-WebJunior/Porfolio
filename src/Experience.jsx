import React from "react";

export default function Experience() {
  return (
    <section
      id="exp"
      className="flex text-white flex-col justify-center  items-center"
    >
      <h1 className="lg:text-lg text-xs text-center">Explorez mon</h1>
      <p className="font-extrabold lg:text-4xl text-xl">Expérience</p>

      <div className="bg-[#5de9e2d6] max-sm:bg-transparent text-shadow-lg transition-all duration-300  w-2 h-1/3 max-sm:h-none mr-5 mt-6 flex flex-col justify-start items-center space-y-10 max-sm:gap-6  ">
        {/* ------------------- */}
        <div className="bg-[#5de9e2d6] max-sm:hidden block  transition-all duration-300 shadow-[0_0_15px_10px_rgba(93,233,226,0.6)] bg-[hsl(177,100%,50%)]  w-6 h-6 mr-0 rounded-full mb-2"></div>
        {/* ------------------- */}
        <div className=" lg:mr-80 -ml-10 -mt-3 text-center  max-sm:mr-16 items-center justify-center  p-2 rounded-full">
          <div className="-mt-2 lg:w-96 w-40 lg:mr-32  bg-zinc-900  blinking-shadow border-[#5de9e2d6] max-sm:w-48  rounded-xl py-5 max-sm:py-10 ">
            <p className="  font-bold lg:text-sm text-xs ">
              Baccalauréat Série Mathématiques
            </p>

            <p className=" text-xs max-sm:hidden block ">2016 à 2019 </p>
            <p className="mr-2 text-xs ml-4 max-sm:hidden block ">
              {" "}
              Lycée Nouadhibou 2, Mauritanie, Nouadhibou
            </p>
          </div>
        </div>
        <div className="bg-[#5de9e2d6]  max-sm:hidden block   transition-all duration-300 shadow-[0_0_15px_10px_rgba(93,233,226,0.6)] bg-[hsl(177,100%,50%)]  w-6 h-6 mr-0 rounded-full mb-2"></div>
        <div className=" ml-[500px] =  mt-6  max-sm:py-10  max-sm:ml-32   bg-zinc-900  text-center items-center justify-center py-5  blinking-shadow  rounded-xl">
          <p className="-mt-2 max-sm:mt-0 lg:w-96 w-32 max-sm:w-48  font-bold lg:text-sm text-xs">
            Licence en Mathématiques et Informatique
          </p>
          <p className="text-xs  max-sm:hidden block ">
            2019 à 2022,{" "}
            <span className="max-sm:hidden block">
              {" "}
              Faculté des sciences et techniques
              <br /> Université Al Asriya, Nouakchott, Mauritanie{" "}
            </span>
          </p>
        </div>
        <div className="bg-[#5de9e2d6]   max-sm:hidden block   transition-all duration-300 shadow-[0_0_15px_10px_rgba(93,233,226,0.6)] bg-[hsl(177,100%,50%)]  w-6 h-6 mr-0 rounded-full mb-2"></div>{" "}
        <div className=" lg:mr-80 max-sm:ml-0 -ml-10 -mt-3  max-sm:mr-24 text-center items-center justify-center  p-2 rounded-full">
          <div className="-mt-2 bg-zinc-900 max-sm:py-10  lg:w-96 w-40 lg:mr-32 py-5  blinking-shadow border-[#5de9e2d6] max-sm:w-48 rounded-xl ">
            <p className="font-bold lg:text-sm text-xs">
              Master en Informatique, Systèmes d'Information
            </p>

            <p className="text-xs max-sm:hidden block">
              2022 à 2024 <br />
              Faculté des sciences et techniques
              <br />
              Université Al Asriya, Nouakchott, Mauritanie
            </p>
          </div>
        </div>
        <div className="bg-[#5de9e2d6]  max-sm:hidden block   transition-all duration-300 shadow-[0_0_15px_10px_rgba(93,233,226,0.6)] bg-[hsl(177,100%,50%)]  w-6 h-6 mr-0 rounded-full mb-2"></div>
        <div className="  ml-[500px]  max-sm:hidden block  bg-zinc-900  lg:w-96 -mt-2 w-72   font-bold lg:text-sm text-xs   text-center py-5  blinking-shadow border-[#5de9e2d6] rounded-xl ">
          Formation en Développement Frontend avec Angular
          <p className="text-xs max-sm:hidden block ">
            04-12-2023 à 29-12-2023
          </p>
          <p className="text-xs  ">
            {" "}
            Société SMART MS AS, Certification obtenue
          </p>
        </div>
        <div className="bg-[#5de9e2d6] max-sm:hidden block    transition-all duration-300 shadow-[0_0_15px_10px_rgba(93,233,226,0.6)] bg-[hsl(177,100%,50%)]  w-6 h-6 mr-0 rounded-full mb-2"></div>
        <div className=" lg:mr-80 -ml-10 -mt-3 text-center items-center justify-center  p-2 rounded-full">
          <div className="-mt-2 lg:w-96 w-40 bg-zinc-900 max-sm:py-10  max-sm:ml-72   mr-32 py-5 max-sm:w-48 blinking-shadow border-[#5de9e2d6] rounded-md  ">
            <p className="  font-bold lg:text-sm text-xs">
              <span className=" max-sm:hidden block ">
                {" "}
                Stage de fin d’études en{" "}
              </span>
              Développement d’une plateforme de Business Banking avec React
            </p>
            <p className="text-xs max-sm:hidden block">
              de 22 avril a 06 septembre <br />
              au niveau de Next Technology{" "}
            </p>
          </div>
        </div>
        <div className="bg-[#5de9e2d6]  max-sm:hidden block  transition-all duration-300 shadow-[0_0_15px_10px_rgba(93,233,226,0.6)] bg-[hsl(177,100%,50%)]  w-6 h-6 mr-0 rounded-full mb-2"></div>
        <div className=""></div>
      </div>
    </section>
  );
}
