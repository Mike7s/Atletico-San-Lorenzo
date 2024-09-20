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
      <div className="relative flex flex-col min-h-screen bg-hero-pattern bg-cover bg-center">
        <NavBar />

        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

        <div className="relative z-10 flex-grow flex flex-col justify-center items-center space-y-4">
          <h1
            className={`font-urbanist font-bold text-8xl sm:p-4 transition-all duration-700 transform ${
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

        <Footer />
      </div>
    </>
  );
}

export default App;
