import Footer from "./components/footer";
import NavBar from "./components/nav";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        
        <NavBar />

        <div className="relative flex-grow flex flex-col justify-center items-center space-y-4">
          <h1
            className={`px-5 font-urbanist font-bold text-8xl sm:p-4 transition-all duration-700 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            Atletico San Lorenzo
          </h1>
          <p
            className={`font-urbanist text-center font-bold text-2xl transition-all duration-700 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            Benvenuti nella pagina ufficiale dell'Atletico San Lorenzo
          </p>
        </div>

        <div className="absolute inset-0 w-full h-full flex justify-center items-center opacity-20 pointer-events-none z-[-1]">
          <img
            src="/SanLorenzo.jpeg"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
