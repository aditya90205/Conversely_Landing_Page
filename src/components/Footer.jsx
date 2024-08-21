import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import img from "/conversely.png";

const Footer = () => {
  return (
    <>
      {/* <footer className="w-full  bottom-0 left-0 bg-gradient-to-t from-[#c8e0f2] fixed to-white text-center py-8">
      <div className="flex justify-center items-center mb-4">
        <img src={img} alt="Conversely Logo" className="h-24 mb-2" />
      </div>
      <h2 className="text-lg font-semibold mb-2">Follow us on</h2>
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-600 text-2xl hover:text-blue-800" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 text-2xl hover:text-pink-700" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-black text-2xl hover:text-gray-700" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-800 text-2xl hover:text-blue-900" />
        </a>
      </div>
      <p className="text-gray-600">
        &copy; copyright 2024 by <a href="https://conversely.in" className="hover:underline">Conversely.in</a>
      </p>
    </footer> */}
       <footer className="w-full bg-gradient-to-t from-[#c8e0f2] to-white text-center py-8 mt-auto">
      <div className="flex justify-center items-center mb-4">
        <img src={img} alt="Conversely Logo" className="h-12 mb-2" />
      </div>
      <h2 className="text-lg font-semibold mb-2">Follow us on</h2>
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-600 text-2xl hover:text-blue-800" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 text-2xl hover:text-pink-700" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-black text-2xl hover:text-gray-700" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-800 text-2xl hover:text-blue-900" />
        </a>
      </div>
      <p className="text-gray-600">
        &copy; copyright 2024 by <a href="https://conversely.in" className="hover:underline">Conversely.in</a>
      </p>
    </footer>
    </>
  );
};

export default Footer;
