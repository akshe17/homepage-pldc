import Navbar from './components/navbar'
import './App.css'
import heroImg from './assets/hero.jpg'
import section1 from './assets/section1.jpg'
import section2 from './assets/section2.jpg'
import section3 from './assets/girlpalying.webp'
import FeatureGrid from './components/assistanceGrid'
import section4 from './assets/fastwifi.png'
import Footer from './components/footer'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
function App() {

  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: false,
    });
  }, []);

return(
    <>
    <Navbar></Navbar>

    <div className="min-h-screen flex relative flex-col items-center justify-start md:justify-center">

  <div className="h-full  w-full object-cover absolute inset-0 -z-1">
    <img src={heroImg} alt="Example Image" className="w-full h-full object-cover brightness-30 rounded-lg shadow-md" />
  </div>


  <div className="flex flex-col mt-[15rem] md:mt-0 justify-center items-center  text-center space-y-6">
    <div className="w-auto p-2">
    <h1 className="text-5xl text-white font-bold leading-tight">Upgrade Your Home With 5G Internet</h1>


    </div>
 
    <div className="w-auto md:w-[600px]  my-5 text-center">
      <p className="text-gray-300 text-sm md:text-xl leading-relaxed">
        Unlock lightning-fast speeds and unbeatable reliability, bringing smooth streaming, effortless gaming, and seamless browsing to every corner of your home.
      </p>
    </div>


    <div className=" flex mt-5 space-x-4">
    <button className="backdrop-blur-xl border-1 border-white text-white font-bold cursor-pointer text-sm py-3 px-6 rounded-full shadow-md hover:bg-white hover:text-black transition-all duration-300">
        LEARN MORE
      </button>
      <button className="bg-red-600 text-white text-sm cursor-pointer  font-bold py-3 px-6 rounded-full shadow-md hover:bg-red-700 transition-transform duration-300">
        FIND YOUR PLAN
      </button>
    
    </div>
  </div>
</div>













    <div className=" h-[100vh] bg-slate-900">
    <div className="grid grid-cols-1 w-full h-full md:grid-cols-2 gap-6 items-center p-6">

  <div data-aos="fade-right" className="p-4">
    <div className="w-full h-full overflow-hidden relative">
      <img src={section1}   loading="lazy" alt="Enjoy Fast Movies" 
        className="w-full h-full object-cover clip-path-custom transition-transform duration-500 hover:scale-105" />
    </div>
  </div>

  <div data-aos="fade-left" className="flex flex-col p-4 text-white space-y-4">
    <h1 className="text-3xl md:text-5xl font-bold leading-tight">Enjoy Movies With <span className="text-red-600">5G Internet</span></h1>
    <p className="text-lg text-gray-300">Stream your favorite movies in lightning speed with our blazing fast 5G connection. No more buffering, just pure entertainment.</p>

    
    <button className="bg-red-600 hover:bg-red-700 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl w-max">
      Plan Now 🚀
    </button>
  </div>

</div>


    </div>
     




    <div className="flex bg-slate-900 flex-col-reverse md:flex-row w-full h-full gap-6 items-center p-6">

<div data-aos="fade-right" className="flex flex-col p-4 text-white space-y-4">
 
  <h1 className="text-3xl md:text-5xl font-bold leading-tight">
  Dominate Your Game With <span className="text-red-600">5G Internet</span>
</h1>
<p className="text-lg text-gray-300">
  Experience ultra-low latency, lightning-fast speeds, and zero lag. Whether youre battling in the arena or streaming in 4K, 5G keeps you ahead of the competition.  
</p>

  
  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl w-max">
    Plan Now 🚀
  </button>
</div>


<div data-aos="fade-left" className="p-4">
  <div className="w-full h-full overflow-hidden relative">
    <img src={section2}   loading="lazy" alt="Enjoy Fast Movies" 
      className="w-full h-full object-cover clip-path-custom transition-transform duration-500 hover:scale-105" />
  </div>
</div>

</div>


<div data-aos="fade-up" className="h-auto w-full flex flex-col justify-center items-center p-6 mt-[5rem]">
  <div className="relative">
  <h1 className="text-4xl p-4 my-5 text-white font-bold">INTERNET PLAN</h1>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-rocket-takeoff-fill text-red-600 absolute top-8 left-0" viewBox="0 0 16 16">
  <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
  <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
</svg>

  </div>

 <div className="flex mt-5 justify-center items-center gap-10 flex-wrap p-2">

 <div className="relative w-[400px] min-h-[500px] bg-gradient-to-br from-slate-700 to-gray-900 p-10 rounded-2xl flex flex-col items-center shadow-lg border border-gray-600 overflow-hidden clip-style">
 
 <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600 opacity-20 blur-3xl rounded-full"></div>
 <div className="flex flex-col justify-between h-full flex-auto">
  <div className="">

  </div>
  <h1 className="text-white text-8xl flex justify-start font-extrabold tracking-wide"><span className='text-4xl italic p-2'>₱</span>999</h1>
 <p className="text-gray-300 text-lg mt-2 uppercase tracking-widest">Starting Price</p>

 <div className="w-full h-1 bg-red-600 my-4 rounded-lg"></div>


 <div className="h-[100px] overflow-hidden relative">
  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
  Unlock premium features with our exclusive ₱999 plan. 
  Get access to priority support, advanced tools, and a seamless experience.
  </p>


 </div>
 

 

 <button className="mt-6 w-full bg-red-600 cursor-pointer text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-red-700">
    Get Plan
  </button>
</div>




 <div className="flex justify-between h-full flex-col">
  
 <p className="text-gray-400 text-sm leading-relaxed">

 </p>



 </div>


 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-blue-500"></div>
</div>







<div className="relative w-[400px] min-h-[500px] bg-gradient-to-br from-slate-700 to-gray-900 p-10 rounded-2xl flex flex-col items-center shadow-lg border border-gray-600 overflow-hidden clip-style">
 
 <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600 opacity-20 blur-3xl rounded-full"></div>
 <div className="flex flex-col justify-between h-full flex-auto">
  <div className="">

  </div>
  <h1 className="text-white text-8xl flex justify-start font-extrabold tracking-wide"><span className='text-4xl italic p-2'>₱</span>1299</h1>
 <p className="text-gray-300 text-lg mt-2 uppercase tracking-widest">Elite Booster Plan</p>

 <div className="w-full h-1 bg-red-600 my-4 rounded-lg"></div>


 <div className="h-[100px] overflow-hidden relative">
  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
  Power up your experience with our elite booster plan for only ₱1299. Enjoy seemless connectivity, start your plan!
  </p>


 </div>
 

 

 <button className="mt-6 w-full bg-red-600 cursor-pointer text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-red-700">
    Get Plan
  </button>
</div>




 <div className="flex justify-between h-full flex-col">
  
 <p className="text-gray-400 text-sm leading-relaxed">

 </p>



 </div>


 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-blue-500"></div>
</div>





<div className="relative w-[400px] min-h-[500px] bg-gradient-to-br from-slate-700 to-gray-900 p-10 rounded-2xl flex flex-col items-center shadow-lg border border-gray-600 overflow-hidden clip-style">
 
 <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600 opacity-20 blur-3xl rounded-full"></div>
 <div className="flex flex-col justify-between h-full flex-auto">
  <div className="">

  </div>
  <h1 className="text-white text-8xl flex justify-start font-extrabold tracking-wide"><span className='text-4xl italic p-2'>₱</span>1999</h1>
 <p className="text-gray-300 text-lg mt-2 uppercase tracking-widest">Premium Core Plan</p>

 <div className="w-full h-1 bg-red-600 my-4 rounded-lg"></div>


 <div className="flex flex-col h-full justify-between">

 <div className="h-[100px] overflow-hidden relative">
  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
    Experience the ultimate premium benefits with our ₱1999 plan. 
    Enjoy top-speed internet performance, exclusive features, and an optimized experience for your gaming and vibing.
  </p>

</div>






 </div>
 

 

 <button className="mt-6 w-full bg-red-600 cursor-pointer text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-red-700">
    Get Plan
  </button>
</div>




 <div className="flex justify-between h-full flex-col">
  
 <p className="text-gray-400 text-sm leading-relaxed">

 </p>



 </div>


 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-blue-500"></div>
</div>





 </div>
 
</div>





<div className=" h-[100vh] bg-slate-900">
    <div className="grid grid-cols-1 w-full h-full md:grid-cols-2 gap-6 items-center p-6">

  <div data-aos="fade-right" className="p-4">
    <div className="w-full h-full overflow-hidden relative">
      <img src={section3}   loading="lazy" alt="Enjoy Fast Movies" 
        className="w-full h-full object-cover clip-path-custom transition-transform duration-500 hover:scale-105" />
    </div>
  </div>

  <div data-aos="fade-left" className="flex flex-col p-4 text-white space-y-4">
    <h1 className="text-3xl md:text-5xl font-bold leading-tight italic">PL<span className="text-red-600">DC NET</span>, The Fastest Internet In The Philippines.</h1>
    <p className='text-xl text-gray-200'><span className='italic font-bold'>PL<span className='text-red-600'>DC NET</span></span> delivers the fastest and most reliable internet connection in the Philippines, ensuring seamless browsing, streaming, and gaming experiences. With cutting-edge technology and top-tier infrastructure, it provides ultra-high speeds and low latency, making it the ultimate choice for both homes and businesses.</p>
 
  </div>

</div>


    </div>









    <div className="mt-10 flex flex-row justify-center items-center ">
    <div className="flex justify-center items-center flex-col p-4">
      <div className="relative p-4 my-5 font-bold text-4xl text-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-rocket-takeoff-fill text-red-600 absolute top-1 left-1" viewBox="0 0 16 16">
  <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
  <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
</svg>

        <h1>Need Help Setting Up?</h1>
      </div>


   

<div data-aos="fade-up" className="">
<FeatureGrid></FeatureGrid>
     

</div>
    

</div>

    </div>




<div className="min-h-[500px] flex mt-[10rem] p-10 flex-col md:flex-row justify-between items-center">
  
<div  data-aos="fade-right" className="w-full h-full overflow-hidden clip-style">
    <img src={section4}   loading="lazy" className='w-full h-full object-cover' alt="Why choose PLDC" />
  </div>

  <div  data-aos="fade-left" className="flex flex-col gap-5 text-left px-10 py-4">
    
   
   <h1 className='text-4xl md:text-5xl text-gray-100'>Why Choose <span className='text-gray-200 italic font-bold'>PL<span className='text-red-600'>DC NET</span></span>?</h1>
   <p className='text-gray-300 text-xl'>  Enjoy ultra-fast internet, seamless connectivity, and dedicated customer support. 
  Whether for work, gaming, or streaming, we ensure a lag-free experience.
</p>

<div className="flex mt-[3rem] gap-5 flex-row">
<button className="backdrop-blur-xl border-1 border-white text-white font-bold cursor-pointer text-sm py-3 px-6 rounded-full shadow-md hover:bg-white hover:text-black transition-all duration-300">
        LEARN MORE
      </button>
      <button className="bg-red-600 text-white text-sm cursor-pointer  font-bold py-3 px-6 rounded-full shadow-md hover:bg-red-700 transition-transform duration-300">
        GET IN TOUCH
      </button>
</div>
  </div>



</div>




<div className="w-full h-screen mt-[8rem] grid grid-cols-1 md:grid-cols-2">

  <div className="relative flex justify-center items-center bg-black text-white px-8 py-12">

    <div className="absolute inset-0">
      <img src={section3}   loading="lazy" className="w-full h-full object-cover opacity-20" alt="Reviews" />
      <div className="absolute inset-0 bg-red-500/10 backdrop-blur-md"></div> 
    </div>

  
    <div className="relative z-10 text-center max-w-lg">
      <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
        See What They Say About Our Internet
      </h1>
      <p className="text-gray-300 text-lg md:text-xl mt-4 leading-relaxed">
        Our customers experience blazing-fast speeds and seamless connectivity. 
        Read their testimonials and see why we are the top choice for reliable internet.
      </p>
      <button className="mt-6 bg-red-600 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 hover:scale-105 transition-transform duration-300">
        CHECK REVIEWS
      </button>
    </div>
  </div>

  
  <div className="relative flex justify-center items-center bg-black text-white px-8 py-12">

    <div className="absolute inset-0">
      <img src={section1}   loading="lazy" className="w-full h-full object-cover opacity-20" alt="Announcements" />
      <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-md"></div> 
    </div>

    <div className="relative z-10 text-center max-w-lg">
      <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
        Latest Announcements & Updates
      </h1>
      <p className="text-gray-300 text-lg md:text-xl mt-4 leading-relaxed">
        Stay informed with our latest news, service updates, and important announcements. 
        Keep track of new features, scheduled maintenance, and more.
      </p>
      <button className="mt-6 bg-blue-600 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
        VIEW UPDATES
      </button>
    </div>
  </div>

</div>




<Footer></Footer>
   
    </>
  );
}

export default App
