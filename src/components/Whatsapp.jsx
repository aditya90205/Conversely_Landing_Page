import { FaInstagram } from "react-icons/fa";
import img from "/chat1.png";
// import qrImage from "/ConverselyBot.png";

const Whatsapp = () => {
  const handleButtonClick = () => {
      window.open("https://wa.me/918076468761?text=Heyy", "_blank");
    };
  return (
    <div className="flex flex-row bg-blue-50 rounded-md mt-5 common">
      <div className="flex justify-between p-10">
        <div className="grid relative">
          <img src={img} alt="QR1 Logo" className=" w-[849.92px]" />
          <button
              className="text-blue-500 bg-white font-bold absolute top-[24.7rem] left-24 whitespace-nowrap text-sm"
              onClick={handleButtonClick}
            >
              https://wa.me/918076468761?text=Heyy
            </button>
        </div>
        <div className="mt-14 p-6 w-2/3">
          <div className="text-left">
          <div
              className="mb-4 flex items-center
            "
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-red-600 text-4xl hover:text-red-800" />
              </a>
              <p className="text-lg ml-2">Chat, Swipe, Shop - Insta to WhatsApp!</p>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Tap to Connect, Chat on WhatsApp
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Easily access our exclusive offers through the shared link. Just
              tap the link in your Instagram messages, and you will be instantly
              connected to our WhatsApp bot for a seamless shopping experience.
              Do not miss out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatsapp;
