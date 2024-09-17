import NavBar from "../components/nav";
import Footer from "../components/footer";
import PalmaresList from "../components/palmares";

function Info() {
  return (
    <>
      <NavBar />
      <main className="bg-sanlorenzoBlu text-white">
        <div className="grid-cols-1 pb-16 ">
          <img
            src="/IlPresidente.jpeg"
            alt="Logo San Lorenzo"
            className="w-full  pb-5 h-70"
          />
        <h1 className="flex justify-center font-urbanist text-6xl pb-10 pt-20 font-bold sm:pl-10">
          La nostra storia 
        </h1>


          <p className="font-urbanist  pl-5 pr-6 text-3xl">
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
