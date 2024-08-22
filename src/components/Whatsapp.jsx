import img from "/chat.png";
// import qrImage from "/ConverselyBot.png";

const Whatsapp = () => {
  const handleButtonClick = () => {
      window.open("https://wa.me/918076468761?text=Heyy", "_blank");
    };
  return (
    <div className="flex flex-row bg-blue-50 rounded-md shadow-lg mt-4 common">
      <div className="flex justify-between p-10">
        <div>
          <img src={img} alt="QR1 Logo" className="h-96" />
        </div>
        <div className="mt-14 p-6 w-2/3">
          <div className="text-left">
            <div className="mb-3">
              <button className="border border-blue-500 text-blue-500 rounded-full px-4 py-1 text-xl font-semibold hover:bg-blue-200 hover:text-white" onClick={handleButtonClick}>
                Tap & Shop
              </button>
              {/* <img src={qrImage} alt="QRCode" className="h-24" /> */}
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
