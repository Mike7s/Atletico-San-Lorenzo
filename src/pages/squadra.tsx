import Footer from "../components/footer";
import NavBar from "../components/nav";
import PlayerCard from "../components/playerCards";

interface Player {
  key: number;
  img: string;
  completeName: string;
  age: number | string;
  position: string;
}

const team: Player[] = [
  {
    key: 1,
    img: "/SanLorenzo.jpeg",
    completeName: "Luca Buonanno",
    age: `24/09/1988`,
    position: "Portiere",
  },
  {
    key: 2,
    img: "/SanLorenzo.jpeg",
    completeName: "Michele Simonetti",
    age: `29/04/1995`,
    position: "difensore",
  },
  {
    key: 3,
    img: "/SanLorenzo.jpeg",
    completeName: "Emanuele Mormone",
    age: `20/06/1986`,
    position: "attaccante",
  },
  {
    key: 4,
    img: "/SanLorenzo.jpeg",
    completeName: "Luigi Cardone (C)",
    age: `01/03/1981`,
    position: "difensore",
  },
  {
    key: 5,
    img: "/SanLorenzo.jpeg",
    completeName: "Vincenzo Forino",
    age: `24/11/1998`,
    position: "difensore",
  },
  {
    key: 6,
    img: "/SanLorenzo.jpeg",
    completeName: "Gianluca Imbimbo",
    age: `13/11/1991`,
    position: "centrocampista",
  },
  {
    key: 7,
    img: "/SanLorenzo.jpeg",
    completeName: "Simone Brancaccio",
    age: `13/05/1996`,
    position: "difensore",
  },
];

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
            age={player.age}
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
