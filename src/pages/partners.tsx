import NavBar from "../components/nav";
import Footer from "../components/footer";
import SponsorCards from "../components/sponsorCards";
import { Link } from "react-router-dom";

const sponsors = [
  { id: 1, title: 'Icona Casa', img: '/IconaCasa.jpeg', link: 'https://www.iconacasa.com/?fbclid=PAZXh0bgNhZW0CMTEAAaZB5cEAuy_1lMlsFcyMO-XDXV2EBwd8i9Pz6S5EkfOF0tscXh6_F3El2P0_aem_xQgBxLUp_LGR6L9auUuDeA' },
  { id: 2, title: 'Bolle E Bollicine', img: '/BolleEBollicine.jpeg', link:'https://www.instagram.com/bolle.e.bollicine/?locale=zh_CN',}
  
];

function Partner() {
  return (
      <>
      <NavBar/>
      
      <main className="bg-partner">
        
        <h1 className="flex justify-center font-urbanist font-bold pt-20 pb-10 text-6xl " >I NOSTRI SPONSOR </h1>
        <div className="flex flex-wrap justify-center gap-6 pb-2">
          {sponsors.map(sponsor => (
              <SponsorCards
                  key={sponsor.id} 
                  title={sponsor.title}
                  img={sponsor.img}
                  link={sponsor.link}
              />
          ))}
      </div>
      <div className="grid place-items-center pt-10 pb-10">
  <div className="text-center">
    <h2>Vuoi unirti a noi?</h2>
    <Link to={"/contatti"}>
    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">  Contattaci!</button>
    </Link>
  </div>
</div>

      </main>
      <Footer/>
      </>
    
  );
}

export default Partner