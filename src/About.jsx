import {
  BrainCircuit,
  DatabaseBackup,
  LaptopMinimal,
  LibraryBig,
  User,
} from "lucide-react";
import React from "react";
import { SiAffinitydesigner } from "react-icons/si";
export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center">
      <h1 className="text-xs lg:text-lg  max-sm:text-center text-white">
        Apprenez-en davantage
      </h1>
      <p className="font-extrabold lg:text-4xl sm:text-xs ">À propos de moi</p>
      <div className="mr-12 hidden  max-sm:block  ml-12">
        <img
          src="image/Elise Fedoroff.jfif"
          className="h-32 w-36 rounded-full hover:shadow-[0_0_60px_10px_rgba(93,233,226,0.6)]   transition-all duration-300"
          alt="Profile"
        />
      </div>
      <p className="text-white container px-7 py-7 text-justify text-sm lg:text-lg">
        Développeuse Frontend, titulaire d'un Master en Systèmes d’Information
        (2023-2024), spécialisée en conception et développement d’applications
        web. Expertise en technologies modernes telles que Angular, React, Java,
        et Django, combinée à une solide maîtrise de HTML, CSS, et JavaScript.
        Passionnée par le développement web, tu as réalisé des projets
        significatifs, tels qu’une plateforme de gestion des commandes en ligne
        utilisant Angular et un système de gestion des inscriptions étudiantes
        en PHP/MySQL. Tes compétences incluent également l’utilisation d’outils
        comme Figma pour le design et l'intégration, renforçant ta capacité à
        offrir des interfaces utilisateur intuitives et performantes.
      </p>
      <div className="mt-20 text-white space-y-6 sm:space-y-8 lg:space-y-10">
        <div className="flex items-center  sm:flex-row gap-4  justify-between ">
          <div className="border  py-2  lg:py-6 w-44 sm:w-1/2 rounded-lg shadow-xl  flex flex-col justify-center items-center ">
            <User className="text-center " />
            <p className="font-extrabold ">Expérience</p>
            <p className="text-sm lg:text-xs  hidden sm:block">
              Plus de 8 mois
            </p>
            <p className="text-sm lg:text-xs sm:text-xs hidden sm:block">
              Développeur Frontend
            </p>
          </div>
          <div className="border  py-2  lg:py-6 w-44 sm:w-1/2 rounded-lg shadow-xl  flex flex-col  justify-center items-center ">
            <LibraryBig />
            <p className="font-extrabold ">Éducation</p>

            <p className="text-sm lg:text-xs sm:text-xs hidden sm:block ">
              Baccalauréat Série Mathématiques
            </p>
            <p className="text-sm lg:text-xs sm:text-xs hidden sm:block">
              Master , Systèmes d'Information
            </p>
          </div>
        </div>

        <div className="flex  sm:flex-row gap-8 mt-20 justify-between  items-center">
          <div className="flex gap-4">
            <div className="border shadow-lg p-2 rounded-lg lg:w-52 w-20 flex flex-col justify-center items-center ">
              <LaptopMinimal />
              <p className="font-semibold text-center text-sm hidden sm:block">
                Développement Web et Application
              </p>
            </div>
            <div className="border shadow-lg p-2 rounded-lg lg:w-52 w-20 flex flex-col justify-center items-center ">
              <DatabaseBackup />
              <p className="font-semibold text-center text-sm hidden sm:block">
                Base de données et <br />
                Visualisation
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="border shadow-lg p-2 rounded-lg  lg:w-52 w-20  flex flex-col justify-center items-center ">
              <SiAffinitydesigner />
              <p className="font-semibold text-center text-sm hidden sm:block">
                Conception de l'interface utilisateur et de l'expérience
              </p>
            </div>
            <div className="border shadow-lg p-2 rounded-lg  lg:w-52 w-20   flex flex-col justify-center items-center ">
              <BrainCircuit />
              <p className="font-semibold text-center text-sm hidden sm:block">
                IA et apprentissage <br />
                automatique
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
