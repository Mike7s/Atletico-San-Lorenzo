import NavBar from "../components/nav";
import Footer from "../components/footer";
import PalmaresList from "../components/palmares";
import { useState } from "react";

function Info() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <NavBar />
      <main className="bg-sanlorenzoBlu text-white">
        <div className="pb-16">
          {!loading && <div className="animate-pulse h-screen">LOADING</div>}

          <img
            onLoad={() => setLoading(true)}
            src="/IlPresidente.jpeg"
            alt="Logo San Lorenzo"
            className={`${
              loading ? "" : "hidden"
            } w-full h-auto lg:h-screen `} 
          />

          <h1 className="flex justify-center font-urbanist text-6xl px-5 pb-10 pt-20 font-bold sm:pl-10">
            La nostra storia
          </h1>

          <p className="font-urbanist pl-5 pr-6">
            L'Atletico San Lorenzo è una società calcistica amatoriale fondata
            il 31 agosto 2015 da Valerio Cocorullo. Questa iniziativa nasce
            dall'amore per il calcio e dalla volontà di creare un ambiente in
            cui le persone possano unirsi attorno a una passione comune.
            <br />
            <br />
            Il club si distingue per la sua missione di costruire una vera e
            propria famiglia calcistica, promuovendo il rispetto, la
            collaborazione e l'amicizia tra i suoi membri.
            <br />
            <br />
            Nel corso di questi anni, l'Atletico San Lorenzo ha dimostrato il
            suo valore, conquistando 5 titoli su 6 finali disputate. Tra i
            successi più significativi, si distingue la vittoria nella coppa più
            importante del torneo nel 2018.
            <br />
            <br />
            Il presidente Valerio Cocorullo ha dato vita a questa realtà con
            l'intento di riunire appassionati di calcio di diverse età e
            abilità.
          </p>
        </div>

        <div className="flex justify-center mt-3 pt-5 pb-16 text-white">
          <PalmaresList />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Info;
