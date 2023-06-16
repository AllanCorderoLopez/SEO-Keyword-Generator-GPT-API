import React, { useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import ShareButtonsComponent from "../ShareComponent";

function ModalSocialmedia() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };
  return (
    <div>
      <div className="plus2 ">
        <button
          onClick={openModal}
          className={`pt-2 px-2.5 py-2 items-center content-center
    ${showModal === false ? "" : ""}`}
        >
          <AiOutlineShareAlt />
        </button>
      </div>

      <div
        className={`main-modal color-bg fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster ${
          showModal ? "" : "hidden"
        }`}
      ></div>
      <div
        className={`main-modal   fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster ${
          showModal ? "" : "hidden"
        }`}
      >
        <div className=" shadow-lg opacity-100 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">Compartir</p>
              <div className="modal-close cursor-pointer z-50"></div>
            </div>
            <div className="my-5">
              <h1>Comparte en redes sociales</h1>
            </div>
            <div className="flex  p-10 justify-center items-center">
              <div>
                <div className="mb-10 flex justify-center">
                  <ShareButtonsComponent />
                </div>
                <div className="items-center justify-center flex">
                  <button
                    onClick={closeModal}
                    className="mt-1 ml-2 btn-suggestions-topic focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 animate-slide-top"
                  >
                    Listo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalSocialmedia;
