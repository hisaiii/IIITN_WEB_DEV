import { React, useState } from "react";
import { Director } from "../../index";
import { Chairman } from "../../index";
import { Staff } from "../../index";
import { Registrar } from "../../index";
export default function Administration() {
  const [selectedPage, setSelectedPage] = useState("");
  return (
    <>
      <div className="container">
        <h1 className="pl-0 text-5xl font-bold text-gray-800 mt-25 mb-10">
          Administration
        </h1>
        <div className="navbar pl-0">
        <button
         onClick={() => setSelectedPage("director")}
         className={`px-6 py-2 mx-2 rounded-lg text-white transition ${
         selectedPage === "director" ? "bg-blue-600" : "bg-gray-400 hover:bg-gray-500"
          }`}>
          Director
          </button>
          <button
           onClick={() => setSelectedPage("chairman")}
           className={`px-6 py-2 mx-2 rounded-lg text-white transition ${
           selectedPage === "chairman" ? "bg-blue-600" : "bg-gray-400 hover:bg-gray-500"
           }`}>
            Chairman
          </button>
          <button
           onClick={() => setSelectedPage("registrar")}
           className={`px-6 py-2 mx-2 rounded-lg text-white transition ${
           selectedPage === "registrar" ? "bg-blue-600" : "bg-gray-400 hover:bg-gray-500"
           }`}>
            Registrar
          </button>
          <button
           onClick={() => setSelectedPage("staff")}
           className={`px-6 py-2 mx-2 rounded-lg text-white transition ${
           selectedPage === "staff" ? "bg-blue-600" : "bg-gray-400 hover:bg-gray-500"
           }`}>
            Staff
          </button>

          

          
        </div>

        {
          <div className="content pl-0">
            {selectedPage === "director" && <Director />}
            {selectedPage === "registrar" && <Registrar />}
            {selectedPage === "chairman" && <Chairman />}
            {selectedPage === "staff" && <Staff />}
          </div>
        }
      </div>
    </>
  );
}