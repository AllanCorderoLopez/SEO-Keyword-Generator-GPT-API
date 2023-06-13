import React from "react";
import Pillsbadge from "./Pillsbadge";

function InputPromtp() {
  return (
    <div className="max-w-xl pt-10">
      <h2 className="pb-5">Seleccione el tema principal de su sitio</h2>
      <Pillsbadge />
      <input
        type="email"
        id="helper-text"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder="Escriba el tema principal de su sitio"
      />
    </div>
  );
}

export default InputPromtp;
