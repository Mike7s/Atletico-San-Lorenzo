import NavBar from "../components/nav";
import Footer from "../components/footer";
import SponsorCards from "../components/sponsorCards";
import { Link } from "react-router-dom";

const sponsors = [
  { id: 1, title: 'ICONACASA', img: '/IconaCasa.png', link: 'https://www.iconacasa.com/index.php/agenzie/companyproperties/133-iconacasa-giugliano-in-campania-innamorati' },
  { id: 2, title: 'BOLLE E BOLLICINE', img: '/BolleEBollicine.png', link:'https://www.instagram.com/bolle.e.bollicine/?locale=zh_CN'},
  { id: 3, title: 'TABACCHERIA DI ILLIANO FRANCESCO', img: '/Tabaccheria.png', link:'https://www.instagram.com/tabaccheria_t7?igsh=MW1sb2tjbTM4NXZscA=='},
  { id: 4, title: 'EUROSPORT TIFOMANIA', img: '/Eurosport.png', link:'https://www.instagram.com/eurosport_tifomania?igsh=dGFqZ2o5amdleWZj'},
  { id: 5, title: 'BLUEMOON', img: '/BlueMoon.png', link:'https://ilgigantebluemoonmugnano.jimdofree.com/'}
  
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