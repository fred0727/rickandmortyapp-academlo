import axios from "axios";
import { HiOutlineSearch } from "react-icons/hi";
import ListSearch from "./ListSearch";
import { useState } from "react";

const Location = ({ location, setLocation }) => {
  const [locationSearch, setLocationSearch] = useState(null);
  const message = document.querySelector("#message");
  const form = document.querySelector("#formSearch");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.inputSearch.value;
    if (text.length === 0) {
      emptyField();
    } else {
      axios
        .get(`https://rickandmortyapi.com/api/location/?name=${text}`)
        .then(({ data }) => setLocation(data.results[0]))
        .catch(() => dataNotFound());
    }
  };

  const handleInput = (e) => {
    const text = e.target.value;
    if (text.length === 0) {
      emptyField();
    } else {
      axios
        .get(`https://rickandmortyapi.com/api/location/?name=${text}`)
        .then(({ data }) => {
          dataFound();
          setLocationSearch(data.results);
        })
        .catch(() => {
          dataNotFound();
        });
    }
  };

  const searchLocation = (name) => {
    axios
      .get(`https://rickandmortyapi.com/api/location/?name=${name}`)
      .then(({ data }) => setLocation(data.results[0]))
      .catch((err) => console.log(err));

    form.reset();
    setLocationSearch(null);
  };

  const emptyField = () => {
    setLocationSearch(null);
    if (message.classList.contains("hidden")) {
      message.classList.remove("hidden");
      message.classList.add("flex");
      message.innerHTML = "";
      message.innerHTML = "Enter a location";
    }

    setTimeout(() => {
      message.classList.remove("flex");
      message.classList.add("hidden");
    }, 3000);
  };

  const dataNotFound = () => {
    setLocationSearch(null);
    if (message.classList.contains("hidden")) {
      message.classList.remove("hidden");
      message.classList.add("flex");
      message.innerHTML = "";
      message.innerHTML = "No matches";
    }
  };

  const dataFound = () => {
    if (message.classList.contains("flex")) {
      message.classList.remove("flex");
      message.classList.add("hidden");
    } else {
      message.classList.add("hidden");
    }
  };

  return (
    <div className="mt-12 px-4 flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-[250px] sm:min-w-[600px]"
        id="formSearch"
      >
        <div className="flex justify-between border-2 border-primary-green w-full">
          <input
            onKeyUp={handleInput}
            type="text"
            placeholder="Type a location name"
            className="flex bg-transparent text-xs w-8/12 py-2 text-center outline-none sm:text-2xl"
            id="inputSearch"
            autoComplete="off"
          />
          <button className="flex justify-center items-center gap-1 bg-primary-green w-[70px] text-sm hover:bg-secondary-green hover:text-black sm:w-[215px] sm:gap-4 sm:h-[60px]">
            <span className="hidden sm:flex sm:text-2xl">Search</span>
            <HiOutlineSearch className="text-xl sm:text-2xl" />
          </button>
        </div>
        {locationSearch && (
          <ListSearch
            locationSearch={locationSearch}
            searchLocation={searchLocation}
          />
        )}
        <div
          id="message"
          className="hidden w-full max-h-[200px] bg-opac-bg border-r-2 border-l-2 border-b-2 border-primary-green ps-2 overflow-hidden whitespace-nowrap text-md py-[2px] sm:text-xl"
        ></div>
      </form>
      <h2 className="text-[13.5px] text-center font-[400] text-secondary-green mt-4 sm:text-3xl sm:my-5">
        Welcome to the crazy universe!
      </h2>
      <section className="flex flex-col justify-center gap-2 mt-4 w-[250px] bg-opac-bg p-4 border-secondary-green border-[1px] sm:min-w-[600px] sm:my-4">
        <h3 className="text-sm text-center font-[600] sm:text-2xl">
          {location?.name}
        </h3>
        <ul className="text-xs font-[400] text-white sm:text-lg">
          <li className="flex">
            <span className="min-w-[90px] sm:min-w-[140px]">Type:</span>
            <span className="font-[300] text-secondary-green">
              {location?.type}
            </span>
          </li>
          <li className="flex">
            <span className="min-w-[90px] sm:min-w-[140px]">Dimension:</span>
            <span className="font-[300] text-secondary-green whitespace-nowrap overflow-x-hidden overflow-ellipsis">
              {location?.dimension}
            </span>
          </li>
          <li className="flex">
            <span className="min-w-[90px] sm:min-w-[140px]">Population:</span>
            <span className="font-[300] text-secondary-green">
              {location?.residents.length}
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Location;
