import img from "/QR1.png";
import qrImage from "/ConverselyBot.png"
const QRCodeSection = () => {
  // const handleButtonClick = () => {
  //   window.open("https://wa.me/918076468761?text=Heyy", "_blank");
  // };
  return (
    <div className="flex flex-row bg-blue-50 rounded-md shadow-lg common">
      <div className="flex justify-between p-10">
        <div className="ml-10">
          <img src={img} alt="QR1 Logo" className="h-96" />
        </div>
        <div className="mt-10 p-6 w-2/3">
          <div className="text-left">
            <div className="mb-2">
              {/* <button className="border border-blue-500 text-blue-500 rounded-full px-4 py-1 text-xl font-semibold hover:bg-blue-200 hover:text-white" onClick={handleButtonClick}>
                QR Scan
              </button> */}
              <img src={qrImage} alt="QRCode" className="h-24" />
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
