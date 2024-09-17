interface SponsorProps {
    title: string;
    img: string;
    link: string;
}

const SponsorCards: React.FC<SponsorProps> = ({ title, img, link}) => {
    return (
        <div className="flex flex-col items-center p-4 ">
            
            <a href={link} target="_blank" rel="noopener noreferrer"> <img className="w-60 mb-2" src={img} alt="SPONSOR" /> </a>
            <h1 className="text-center text-lg font-semibold text-white">{title}</h1>
        </div>
    );
}

export default SponsorCards;
