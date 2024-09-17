interface Playerprops {
  key: number;
  img: string;
  completeName: string;
  age: number|string;
  position: string;
}

const PlayerCard: React.FC<Playerprops> = ({
  key,
  img,
  completeName,
  age,
  position,
}) => {
  return (
    <div
      key={key}
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4"
    >
      <img className="w-full h-48 object-cover" src={img} alt="LOGO" />
      <div className="text-black">
        <h1 className="font-bold text-xl mb-2"> {completeName}</h1>
        <p>Data di nascita: {age}</p>
        <p>Ruolo: {position}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
