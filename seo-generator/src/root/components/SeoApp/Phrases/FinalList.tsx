import { ArrayOfPhrases } from "@/context/Context";
import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaRegCopy, FaTimes } from "react-icons/fa";
import ModalSocialmedia from "./ModalSocialmedia";
import { ToastContainer, toast } from "react-toastify";
export interface phrase{
  phrase: string;
}
function FinalList({ arrayOfPhrases }: ArrayOfPhrases) {


  const handleCopy = (phrase: phrase) => {
    navigator.clipboard.writeText(phrase.phrase);
    toast.success('Copiado al portapapeles', {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  return (
    <div className="">

      <h1 className="font-medium text-medium text-gray-800 pt-5">
        Comparte o copia.
      </h1> 

      <div className="my-2 rounded-lg  p-4">
        {arrayOfPhrases.map((phrase:phrase, index) => (
          <div
            className="phrase-container-final justify-between flex animate-slide-top my-2 rounded-lg p-4 px-6"
            key={index}
          >
            <h1 className="font-semibold text-lg h1-phrase">
              {phrase.phrase}{" "}
            </h1>
            <div className="flex">
              <button>
                <ModalSocialmedia phrase={phrase.phrase} />
              </button>

              <button
                onClick={() => handleCopy(phrase)}
                className="ml-3 px-2 items-center content-center"
              >
                <div className="copy">
                  <FaRegCopy />
                </div>
              </button>
              
            </div>
          </div>
        ))}
        
      </div>
      
    </div>
  );
}
export default FinalList;
