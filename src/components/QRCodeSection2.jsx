import video1 from "/conver.mp4"

const QRCodeSection2 = () => {
  const handleButtonClick = () => {
    window.open("https://wa.me/918076468761?text=Heyy", "_blank");
  };
  return (
    <div className="flex flex-row bg-blue-50 mt-4 rounded-md shadow-lg common">
      <div className="flex justify-between rounded-md p-10">
        
        <div className="mt-14 p-6 w-2/3">
          <div className="text-left">
            <div className="mb-4">
              <button className="border border-blue-500 text-blue-500 rounded-full px-4 py-1 text-xl font-semibold hover:bg-blue-200 hover:text-white" onClick={handleButtonClick}>
                Tap & Shop
              </button>
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
        <div className="ml-10">
        <video src={video1} autoPlay loop muted  className="h-96 rounded-md bg-blue-100" />
        </div>
      </div>
    </div>
  );
};

export default QRCodeSection2;
