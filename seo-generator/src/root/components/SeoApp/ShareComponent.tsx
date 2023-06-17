import React from "react";
import {
  FaFacebookF,
  FaFacebookMessenger,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import {} from "react-share";
export interface phrases{
  phrase: string;
}
const ShareButtonsComponent = (phrase:phrases) => {
  const shareUrl = "\n¡Generado en SeoStudio!"; // URL a compartir
  let textToShare = phrase.phrase; // Texto a compartir

  const handleShareClick = (event: any, network: any) => {
    event.preventDefault();

    const shareText = `${textToShare} ${shareUrl}`;

    switch (network) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl
          )}`,
          "_blank"
        );
        break;
      case "instagram":
        window.open(
          `https://www.instagram.com/share?url=${encodeURIComponent(
            shareUrl
          )}&title=${encodeURIComponent(shareText)}`,
          "_blank"
        );
        break;
      case "whatsapp":
        window.open(
          `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`,
          "_blank"
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="justify-center flex items-center">
      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="hover:scale-110 animate-slide-top mb-2 inline-block rounded-lg px-4 py-4 mr-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
        style={{ backgroundColor: "#3b5998" }}
        onClick={(event) => handleShareClick(event, "facebook")}
      >
        <FaFacebookF />
      </button>

      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="hover:scale-110 animate-slide-top mb-2 inline-block rounded-lg px-4 py-4 mr-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
        style={{ backgroundColor: "#d340b3" }}
        onClick={(event) => handleShareClick(event, "instagram")}
      >
        <FaInstagram />
      </button>

      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="hover:scale-110 animate-slide-top mb-2 inline-block rounded-lg px-4 py-4 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
        style={{ backgroundColor: "#3ce85e" }}
        onClick={(event) => handleShareClick(event, "whatsapp")}
      >
        <FaWhatsapp />
      </button>
    </div>
  );
};

export default ShareButtonsComponent;
