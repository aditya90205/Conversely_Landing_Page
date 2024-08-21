import img from "/conversely.png"
const Navbar = () => {
  return (
    <div className="bg-gradient-to-b from-[#7fbbf4] to-white rounded-xl relative p-20 common mt-0.5">
      {/* Navbar */}
      <nav className="bg-white shadow-lg py-4 ml-[12rem] rounded-2xl px-16 absolute" >
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-600">
            <img src={img} alt="Logo" className="h-16 inline-block mr-16" />
          </a>
          <ul className="flex space-x-20 text-lg font-medium text-gray-600">
            <li>
              <a href="#" className="hover:text-black">
                Benefits
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Landing Page Content */}
      <header className="text-center mt-36">
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
