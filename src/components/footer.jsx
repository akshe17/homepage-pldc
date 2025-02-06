import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


function Footer(){
    return(
        
        <footer className="bg-black  text-white py-10 px-6 md:px-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    
   
    <div>
      <h2 className="text-3xl font-bold italic  text-white">PL<span className="text-red-600">DC NET</span></h2>
      <p className="text-gray-400 mt-3">
        Experience ultra-fast internet, seamless connectivity, and top-tier customer support. 
        Join PLDC NET for a lag-free digital experience.
      </p>
    </div>

 
    <div>
      <h3 className="text-xl font-semibold mb-3 text-gray-200">Quick Links</h3>
      <ul className="text-gray-400 space-y-2">
        <li><a href="#" className="hover:text-red-500 transition">Home</a></li>
        <li><a href="#" className="hover:text-red-500 transition">Services</a></li>
        <li><a href="#" className="hover:text-red-500 transition">Pricing</a></li>
        <li><a href="#" className="hover:text-red-500 transition">Contact</a></li>
      </ul>
    </div>

  
    <div className="flex flex-col items-center md:items-end">
      <h3 className="text-xl font-semibold mb-3 text-gray-200">Follow Me!</h3>
      <div className="flex gap-4">
        <a href="https://www.facebook.com/people/Vladimer-Tuyor/pfbid063kdyjm6ri2o5ywsguW6ML1CHiVPk9v1GP5vnH2tVWJsxhfyzRHKPgBeZytPD8X7l/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition">
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </a>
        <a href="https://github.com/akshe17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
    
      </div>
      <p className="text-gray-500 mt-4 text-sm">
        Made by <span className="text-red-500 font-semibold">Vladimer Tuyor</span>
      </p>
    </div>

  </div>

  <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
    © {new Date().getFullYear()} PLDC NET. All rights reserved.
  </div>
</footer>

        
    )
}

export default Footer