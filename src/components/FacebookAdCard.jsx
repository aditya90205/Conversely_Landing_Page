import { FaFacebook } from "react-icons/fa";
import img from "/fb3.png";

const FacebookAdCard = () => {
  const handleButtonClick = () => {
    window.open("https://wa.me/918076468761?text=Fashion", "_blank");
  };
  return (
    <div className="flex flex-row bg-blue-50 mt-5 rounded-md  common">
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
                <FaFacebook className="text-blue-600 text-4xl hover:text-blue-800" />
              </a>
              <p className="text-lg ml-2">Chat, Swipe, Shop - Insta to WhatsApp!</p>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Transform Followers into Loyal Customers
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Facebook offers a powerful platform for businesses to convert
              followers into paying customers. By using engaging content,
              targeted ads, and interactive features like Facebook Shops, you
              can create a direct path from social media engagement to sales.
              Connect with your audience, showcase your products, and make it
              easy for them to shop right from your page.
            </p>
          </div>
        </div>
        <div className="ml-10 grid relative">
          <img src={img} alt="QR1 Logo" className="h-94 w-96" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded absolute top-[19.7rem] right-[13.2rem] whitespace-nowrap" onClick={handleButtonClick}>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacebookAdCard;
