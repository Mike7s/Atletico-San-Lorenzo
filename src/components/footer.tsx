import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import PrivacyPolicy from "../pages/privacyPolicy";



function Footer() {
  return (
    <footer className=" bg-sanlorenzoRed w-full py-4  z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        
        <div className="flex space-x-6">
          <ul className="space-y-2">
            <h2 className="font-urbanist text-white mb-2">I nostri social:</h2>
            <li className="flex items-center space-x-2">
              <a href="https://www.instagram.com/atletico_san_lorenzo?fbclid=IwZXh0bgNhZW0CMTAAAR3CFgJvwxaY6t0qLfUGHOspDmTnxUWfIfdN30_ii_aTx0-IbS4cy0baGYE_aem_wm-no-M-7hYKz56Jygn2nQ" 
              target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 flex items-center">
                <FaSquareInstagram className="mr-2" />
                Instagram
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <a href="https://www.facebook.com/atlsanlorenzo?locale=it_IT" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 flex items-center">
                <FaFacebook className="mr-2" />
                Facebook
              </a>
            </li>        
          </ul>
        </div>
        
        <div className="text-white">
          <h3 className="font-urbanist font-bold text-lg">Atletico San Lorenzo</h3>
          <p>&copy; 2024 Tutti i diritti riservati</p>
              <PrivacyPolicy/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
