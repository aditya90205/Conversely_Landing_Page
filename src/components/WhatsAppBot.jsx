import img1 from "/phone1.png";
import img2 from "/phone2.png";
const WhatsAppBot = () => {
    return (
        <>
        <div className="rounded-xl common">
          <section className="text-center py-4">
            <p className="text-lg text-gray-600 mb-2">See how we help buisnesses to grow</p>
            <h2 className="text-2xl font-semibold text-black">
              Benefits of using Whatsapp bot
            </h2>
          </section>
        </div>
          
          <div className="flex justify-center bg-white p-9 common ">
            <img src={img1} alt="Phone1" className=" rounded-lg shadow-md h-[30rem] mr-4"/>
            <img src={img2} alt="Phone2" className=" rounded-lg shadow-md h-[30rem] ml-4" />
          </div>
          </>
      );
};

export default WhatsAppBot;
