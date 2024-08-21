import "./App.css";
import About from "./components/About";
import FacebookAdCard from "./components/FacebookAdCard";
import Footer from "./components/Footer";
import Middle from "./components/Middle";
import Navbar from "./components/Navbar";
import QRCodeSection from "./components/QRCodeSection";
import QRCodeSection2 from "./components/QRCodeSection2";
import Whatsapp from "./components/Whatsapp";
import WhatsApp2 from "./components/WhatsApp2";
import WhatsAppBot from "./components/WhatsAppBot";

function App() {
  return (
    <>
     <Navbar />
     <Middle />
     <QRCodeSection />
     <QRCodeSection2 />
     <Whatsapp />
     <FacebookAdCard />
     <WhatsApp2 />
     <WhatsAppBot />
     <About />
     <Footer />
   </>
  );
}

export default App;
