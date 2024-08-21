import img from "/group.png";
import img2 from "/catalog.png";
import video2 from "/conver2.mp4";

const WhatsApp2 = () => {
  const handleButtonClick = () => {
    window.open("https://wa.me/918076468761?text=Heyy", "_blank");
  };
  return (
    <div className="flex flex-row bg-blue-50 rounded-md shadow-lg mt-4 common">
      <div className="flex justify-between p-10">
        <div className="ml-10 flex">
          <video src={video2} autoPlay loop muted className="h-96 rounded-xl" />
          <div>
          <img src={img} alt="groupImg" className="h-32 ml-3 mt-14" />
          <img src={img2} alt="groupImg" className="h-48 ml-3 mt-2 " />
          </div>
        </div>
        <div className="mt-14 p-6 w-2/3 ml-9">
          <div className="text-left">
            <div className="mb-4">
              <button
                className="border border-blue-500 text-blue-500 rounded-full px-4 py-1 text-xl font-semibold hover:bg-blue-200 hover:text-white"
                onClick={handleButtonClick}
              >
                Tap & Shop
              </button>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Shop with ease with just a click
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Turn your WhatsApp status viewers into customers by showcasing
              your latest products. Add a link to your WhatsApp bot, making it
              simple for users to explore and purchase directly from the chat.
              Engage your audience in a familiar space and streamline their
              shopping experience with just a tap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsApp2;
