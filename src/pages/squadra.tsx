import Footer from "../components/footer";
import NavBar from "../components/nav";
import PlayerCard from "../components/playerCards";
import { team } from "../teamData";

function Squadra() {
  return (
    <>
      <NavBar />
      
    <div className="bg-sanlorenzoBlu">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mr-3 ml-3  pt-8 pb-8">
        {team.map((player) => (
          <PlayerCard
            key={player.key}
            img={player.img}
            completeName={player.completeName}
            age={player.classe}
            position={player.position}
          />
        ))}
      </div>
      </div>
      <Footer />
    </>
  );
}
export default Squadra;
