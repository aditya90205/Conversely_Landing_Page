import img from "/conversely.png";
const Navbar = () => {
  return (
    <div className="bg-gradient-to-b from-[#b0d6f9] to-white rounded-xl relative pb-16 common mt-0.5 ">
      {/* Landing Page Content */}
      <div className=" ml-[29.6rem] mb-7">
        <img src={img} alt="Logo" className="h-22" />
      </div>
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Instantly Engage with Our <br /> AI-Powered WhatsApp Bot
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-6 mx-auto max-w-3xl">
          Transform your marketing with our AI-powered WhatsApp bot. Connect
          effortlessly and receive personalized support to achieve your business
          goals all through a simple message.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-black font-medium rounded">
            Learn more
          </button>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded">
            Connect Now
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
