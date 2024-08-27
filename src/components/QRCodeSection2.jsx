import { FaInstagram } from "react-icons/fa";
import video1 from "/conver.mp4";

const QRCodeSection2 = () => {
  const handleButtonClick = () => {
    window.open("https://wa.me/918076468761?text=Heyy", "_blank");
  };
  return (
    <div className="flex flex-row bg-blue-50 mt-4 rounded-md common">
      <div className="flex justify-between rounded-md p-10">
        <div className="mt-14 p-6 w-2/3">
          <div className="text-left">
            <div
              className="mb-4 flex items-center
            "
            >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-red-600 text-4xl hover:text-red-800" />
              </a>
              <p className="text-lg ml-2">Insta-Buy, Insta-Joy!</p>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Buy Direct, Buy on Instagram
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Shop easily from your phone! Just scan the QR code outside our
              store to connect with our WhatsApp bot. Browse products, get
              recommendations, and make purchases—all through WhatsApp.
            </p>
          </div>
        </div>
        <div className="ml-10 grid relative">
          <video
            src={video1}
            autoPlay
            loop
            muted
            className="h-96 rounded-md bg-blue-100"
          />
          <button className="bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-7 rounded absolute top-[16.5rem] right-[11.5rem]" onClick={handleButtonClick}>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCodeSection2;
