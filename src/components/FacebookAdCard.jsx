import img from "/fb.png";

const FacebookAdCard = () => {
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
                FB magic
              </button>
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
        <div className="ml-10">
          <img src={img} alt="QR1 Logo" className="h-96 w-96" />
        </div>
      </div>
    </div>
  );
};

export default FacebookAdCard;
