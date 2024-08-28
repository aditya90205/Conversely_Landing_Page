import img from "/QR1.png";
import qrImage from "/ConverselyBot.png";
import { FaWhatsapp } from "react-icons/fa";
const QRCodeSection = () => {
  return (
    <div className="flex flex-row bg-blue-50 rounded-md common">
      <div className="flex justify-between p-10">
        <div className="ml-10 grid relative">
          <img src={img} alt="QR1 Logo" className="h-96" />
          <img
            src={qrImage}
            alt="QRCode"
            className="h-20 absolute top-44 right-28 rounded-lg"
          />
        </div>
        <div className="mt-10 p-6 w-2/3">
          <div className="text-left">
            <div className="mb-4 flex items-center
            ">
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-green-600 text-4xl hover:text-green-800" />
              </a>
              <p className="text-lg ml-2">Shop Effortlessly on WhatsApp.!</p>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Shop Smarter, Shop on WhatsApp
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Shop easily from your phone! Just scan the QR code outside our
              store to connect with our WhatsApp bot. Browse products, get
              recommendations, and make purchases—all through WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeSection;
