import axios from "axios";
import React, { useEffect, useState } from "react";

const Resident = ({ resident }) => {
  const [character, setCharacter] = useState(null);

  const statusStyles = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-400",
  };

  useEffect(() => {
    axios
      .get(resident)
      .then(({ data }) => setCharacter(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="border-[2px] border-secondary-green w-[250px]">
      <div className="relative flex justify-center">
        <img src={character?.image} alt="" />
        <div className="absolute bottom-[20px] flex items-center gap-2 bg-opac-bg border-2 border-secondary-green px-5 py-1">
          <button
            className={`${
              statusStyles[character?.status]
            } w-3 h-3 rounded-full`}
          ></button>
          <h4 className="text-sm">{character?.status}</h4>
        </div>
      </div>
      <section className="py-4">
        <h2 className="font-[700] px-4">{character?.name}</h2>
        <div className="bg-green-950 h-[.1px] w-full my-2"></div>
        <ul className="px-4 text-xs sm:text-lg">
          <li className="text-neutral-500 sm:text-gray-400 flex">
            <h5 className="min-w-[110px]">Species: </h5>
            <span className="text-white whitespace-nowrap overflow-x-hidden overflow-ellipsis">
              {character?.species}
            </span>
          </li>
          <li className="text-neutral-500 sm:text-gray-400 flex">
            <h5 className="min-w-[110px] ">Origin: </h5>
            <span className="text-white whitespace-nowrap overflow-x-hidden overflow-ellipsis">
              {character?.origin.name}
            </span>
          </li>
          <li className="text-neutral-500 sm:text-gray-400 flex">
            <h5 className="min-w-[110px]">Times appear: </h5>
            <span className="text-white">{character?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Resident;
