import img from "/conversely.png";
const Navbar = () => {
  return (
    <div className="bg-gradient-to-b from-[#b0d6f9] to-white rounded-xl relative p-16 common mt-0.5 ">
      {/* Landing Page Content */}
      <div className=" ml-[31rem] mb-7">
        <img src={img} alt="Logo" className="h-[168.8px] w-[168.8]" />
      </div>
      <header className="text-center pb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Instantly Engage with Our <br /> AI-Powered WhatsApp Bot
        </h1>
        <p className="text-[19px] text-gray-600 mt-6 mx-auto max-w-3xl">
          Transform your marketing with our AI-powered WhatsApp bot. Connect <br /> 
          effortlessly and receive personalized support to achieve your business <br /> 
          goals all through a simple message.
        </p>
      
      </header>
    </div>
  );
};

export default Navbar;
