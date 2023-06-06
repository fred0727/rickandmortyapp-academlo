import { useEffect, useState } from "react";
import "./App.css";
import Location from "./components/Location";
import axios from "axios";
import { Random } from "./utils/random";
import ResidentList from "./components/ResidentList";

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${Random()}`)
      .then(({ data }) => console.log(setLocation(data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-2 bg-bg-main bg-cover bg-center bg-fixed font-firaCode">
      <div className="mt-[-100px] sm:mt-[-250px] flex justify-center relative">
        <img
          src="./images/img.png"
          alt=""
          className="animate-spin-slow w-[210px] shadow-primary-green drop-shadow-xsw sm:w-[450px]"
        />
        <img
          src="./images/rickandmorty.svg"
          alt=""
          className="absolute w-[200px] bottom-[35px] sm:w-[400px] sm:bottom-[60px]"
        />
      </div>
      <Location location={location} setLocation={setLocation} />
      <ResidentList residents={location?.residents} location={location} />
    </main>
  );
}

export default App;
