import { useEffect, useState } from "react";
import project from "./project.json";

export default function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(project);
  }, []);

  return (
    <section
      id="pro"
      className="flex flex-col justify-center items-center text-white"
    >
      <h1>Parcourir mes</h1>
      <p className="font-extrabold text-4xl">Projets</p>
      <div className="  grid grid-cols-4  max-sm:grid-cols-2 gap-4 space-y-8 ">
        {projects.map((pro) => (
          <div
            key={pro.id}
            className="shadow-xl bg-zinc-900 max-sm:overflow-auto   transition-all duration-300 hover:shadow-[0_0_60px_2px_rgba(93,233,226,0.6)] border-[#5de9e2d6] border-y p-2 rounded-lg w-60 max-sm:w-40 space-y-2 mt-8 h-72  max-sm:max-h-fit flex flex-col justify-center items-center"
          >
            <div className="shadow-xl border border-gray-200 rounded-3xl max-sm:rounded-md">
              <img src={pro.image} alt={pro.title} className="h-32 w-52 max-sm:h-20 max-sm:w-32" />
            </div>
            <p className="font-extrabold text-xs max-sm:mb-96">{pro.title}</p>
            <button
              className="border border-gray-500 rounded-full p-4 py-1 font-bold"
              onClick={() => window.open(pro.url, "_blank")}
            >
              GitHub
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
