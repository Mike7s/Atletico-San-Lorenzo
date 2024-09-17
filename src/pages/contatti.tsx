import React from "react";
import Footer from "../components/footer";
import NavBar from "../components/nav";
import Map from "../components/map";

const Contatti: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="bg-sanlorenzoBlu font-urbanist ">
        <h1 className="text-5xl pt-16 flex justify-center font-bold">
          Entra a fare parte della famiglia San Lorenzo!
        </h1>
        <div className="mt-16 ml-5 mr-5 pb-16  grid-cols-1 ">
          <h2 className="text-4xl mb-2 font-bold">Contattaci</h2>
          <h3>Telefono:</h3>
          <p className="mb-4">3382882249</p>
          <h3>Email:</h3>
          <p>atleticosanlorenzo2015@gmail.com</p>
          <h1 className="text-5xl flex justify-center mt-8 mb-7 font-bold">Vieni a trovarci!</h1>
          <p className="mb-2">Via innamorati 141, 80014 Giugliano in Campania (NA).</p>
          <div className="">
            <Map />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contatti;
