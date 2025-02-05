import { useState } from "react"
import {useEffect } from "react";


function Navbar(){

  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("bg-brightness-50 backdrop-blur-lg shadow-xl transition-all duration-300 ease-in-out");

      } else {
        setNavbarBg("bg-transparent transition-all duration-300");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


    const [mobileDropdown, setMobileDropdown] = useState(null)

    const toggleMobileDropdown = (index) =>{
        setMobileDropdown(mobileDropdown === index ? null : index);

    }

    const [mobileNav, setMobileNav] = useState(false);

    const toggleMobileNav = () =>{
        setMobileNav(!mobileNav);
    }
    return(
        <>
 
        <navbar className={`fixed h-auto top-0 w-full z-50 p-4 text-white ${navbarBg}`}>

            


            <div className="flex flex-row items-center gap-0 justify-between ">
            <div className="flex relative p-4 block md:hidden">
                     <button id="hamburger" onClick={toggleMobileNav} className="relative md:hidden cursor-pointer  text-gray-200 hover:text-gray-300">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                         <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                     </svg>
                     </button>
            </div>


            <div className="flex relative flex-row items-center  font-bold  px-4  text-red-700 text-center md:text-right">
    
              
                 <h1 className="text-4xl relative text-white m-0 p-0 italic">
                    
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-rocket-takeoff-fill text-red-600 absolute -top-1 -left-2" viewBox="0 0 16 16">
  <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
  <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
</svg>
PL<span className="text-red-600">DC NET</span> </h1>
    
         
             </div>



             <div className="flex     gap-4 text-xl">

                <div className="nav-links gap-7 hidden md:flex  text-[1rem] px-2 ">

                <div className="group h-full relative flex gap-2 justify-center items-center text-gray-200 hover:text-gray-300">

                   <div className="flex gap-2 justify-center items-center">
                      <a href="#">REWARDS</a>

                     <svg className="group-hover:text-red-500 font-bold group-hover:text-red-700" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                         <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                     </svg>
                    </div>

  {/* Invisible Gap Area */}
                          <div className="absolute top-full  left-1/2 transform -translate-x-1/2 w-full h-[3rem] group-hover:block"></div>

  {/* Dropdown Menu */}
                       <div className="absolute  w-[12rem] hidden group-hover:block rounded-xl top-full left-1/2 transform -translate-x-1/2 mt-[0.5rem] px-1 py-4 bg-white shadow-xl text-left text-sm text-black">
                              <a href="#overview" className="block py-2 px-4 text-red-600 hover:text-red-900">Rewards Overview</a>
                              <a href="#earnPoints"  className="block py-2 px-4 text-red-600 hover:text-red-900">How to Earn Points</a>
                              <a href="#redeemRewards" className="block py-2 px-4 hover:text-gray-700">Redeem Rewards</a>
                               <a href="#specialOffers" className="block py-2 px-4 hover:text-gray-700">Special Offers</a>
                               <a href="#history" className="block py-2 px-4 hover:text-gray-700">My Rewards History</a>
                        </div>
</div>


<div className="group h-full relative flex gap-2 justify-center items-center  text-gray-200 hover:text-gray-300">

<div className="flex gap-2 justify-center items-center">
   <a href="#">PROMOS</a>

  <svg className="group-hover:text-red-500 font-bold group-hover:text-red-700" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
  </svg>
 </div>

{/* Invisible Gap Area */}
       <div className="absolute top-full  left-1/2 transform -translate-x-1/2 w-full h-[3rem] group-hover:block"></div>

{/* Dropdown Menu */}
    <div className="absolute  w-[12rem] hidden group-hover:block rounded-xl top-full left-1/2 transform -translate-x-1/2 mt-[0.5rem] px-1 py-4 bg-white shadow-xl text-left text-sm text-black">
    <a href="#helpCenter" className="block py-2 px-4 text-red-600 hover:text-red-900">Help Center</a>
    <a href="#troubleshooting"  className="block py-2 px-4 text-red-600 hover:text-red-900">Troubleshooting</a>
    <a href="#billing" className="block py-2 px-4 hover:text-gray-700">Billing & Payments</a>
    <a href="#reportIssue" className="block py-2 px-4 hover:text-gray-700">Report an Issue</a>
    <a href="#contactUs" className="block py-2 px-4 hover:text-gray-700">Contact Us</a>

     </div>
</div>












<div className="group h-full relative flex gap-2 justify-center items-center text-gray-200 hover:text-gray-300">

<div className="flex gap-2 justify-center items-center">
   <a href="#">LANDLINE</a>

  <svg className="group-hover:text-red-500 font-bold group-hover:text-red-700" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
  </svg>
 </div>

{/* Invisible Gap Area */}
       <div className="absolute top-full  left-1/2 transform -translate-x-1/2 w-full h-[3rem] group-hover:block"></div>

{/* Dropdown Menu */}
    <div className="absolute  w-[12rem] hidden group-hover:block rounded-xl top-full left-1/2 transform -translate-x-1/2 mt-[0.5rem] px-1 py-4 bg-white shadow-xl text-left text-sm text-black">
    <a href="#overview" className="block py-2 px-4 text-red-600 hover:text-red-900">Landline Plans</a>
    <a href="#features"  className="block py-2 px-4 text-red-600 hover:text-red-900">Landline Features</a>
    <a href="#installation" className="block py-2 px-4 hover:text-gray-700">Installation Services</a>
    <a href="#bundles" className="block py-2 px-4 hover:text-gray-700">Bundle Offers</a>
    <a href="#support" className="block py-2 px-4 hover:text-gray-700">Landline Support</a>
     </div>
</div>

                    
                  
<div className="group h-full relative flex gap-2 justify-center items-center  text-gray-200 hover:text-gray-300">

<div className="flex gap-2 justify-center items-center">
   <a href="#">SUPPORT</a>

  <svg className="group-hover:text-red-500 font-bold group-hover:text-red-700" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
  </svg>
 </div>

{/* Invisible Gap Area */}
       <div className="absolute top-full  left-1/2 transform -translate-x-1/2 w-full h-[3rem] group-hover:block"></div>

{/* Dropdown Menu */}
    <div className="absolute  w-[12rem] hidden group-hover:block rounded-xl top-full left-1/2 transform -translate-x-1/2 mt-[0.5rem] px-1 py-4 bg-white shadow-xl text-left text-sm text-black">
    <a href="#faq" className="block py-2 px-4 text-red-600 hover:text-red-900">FAQs</a>
<a href="#contactSupport" className="block py-2 px-4 hover:text-gray-700">Contact Support</a>
<a href="#reportIssue" className="block py-2 px-4 hover:text-gray-700">Report an Issue</a>
<a href="#terms" className="block py-2 px-4 hover:text-gray-700">Terms & Conditions</a>

     </div>
</div>
    
                    



                    
               
              
             
       
              

           

                </div>
{/**login*/}
                <div className="btns  flex flex-row items-center ">

              

                <div className="block  cursor-pointer text-gray-200 hover:text-gray-300 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                     <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>
                </div>
                  

               

            

                </div>
            
                
            </div>




            </div>



           

        </navbar>

{/**mobile */}
<div
  className={`fixed top-0 left-0 transform ${
    mobileNav ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-300 ease-in-out p-0 flex flex-col md:hidden h-full w-[200px] bg-white z-[99] shadow-lg overflow-y-auto`}
>

            
            <div className="absolute p-4 left-2 top-2 ">
                <button onClick={toggleMobileNav} className="text-3xl text-slate-900 hover:text-red-700 cursor-pointer">X</button>
            </div>


            <div className="mt-30 p-0 m-0 w-full">

            <div className="flex w-full m-0 p-0  flex-col justify-center items-center">



 
<div className="w-full bg-white border-t border-gray-300 shadow-md">
    <div className="border-b border-gray-300">
        <button
            onClick={() => toggleMobileDropdown(1)}
            className={`w-full flex items-center justify-between px-6 py-4 text-red-700 font-bold text-lg hover:bg-gray-100 transition-all relative ${
                mobileDropdown === 1 ? "border-l-4 border-red-600 pl-4" : "pl-6"
            }`}
        >
            <div className="flex items-center gap-3">
            <svg width="24" height="24" fill="currentColor" className="bi bi-gift" viewBox="0 0 16 16">
                    <path d="M6 1c1.07 0 2.094.417 2.844 1.167l.156.157.156-.157C9.906 1.417 10.93 1 12 1c1.637 0 3 1.319 3 3 0 1.105-.895 2-2 2H9.5v2H13c.552 0 1 .448 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7c0-.552.448-1 1-1h3.5V6H3C1.895 6 1 5.105 1 4c0-1.681 1.363-3 3-3z"/>
                </svg>
                <span>REWARDS</span>
            </div>
        </button>

        <div className={`flex flex-col overflow-hidden transition-all duration-300 transform origin-top ${mobileDropdown === 1 ? "opacity-100 scale-y-100 max-h-[500px]" : "opacity-0 scale-y-0 max-h-0"}`}>
        <a href="#overview" className="flex items-center gap-3 py-2 px-6 text-red-600 hover:text-red-900">
                Rewards Overview
            </a>
            <a href="#earnPoints" className="flex items-center gap-3 py-2 px-6 text-red-600 hover:text-red-900">
                How to Earn Points
            </a>
            <a href="#redeemRewards" className="flex items-center gap-3 py-2 px-6 hover:text-gray-700">
                Redeem Rewards
            </a>
            <a href="#specialOffers" className="flex items-center gap-3 py-2 px-6 hover:text-gray-700">
                Special Offers
            </a>
            <a href="#history" className="flex items-center gap-3 py-2 px-6 hover:text-gray-700">
                My Rewards History
            </a>
        </div>
    </div>
</div>

<div className="w-full bg-white border-t border-gray-300 shadow-md">
    <div className="border-b border-gray-300">
        <button
            onClick={() => toggleMobileDropdown(2)}
            className={`w-full flex items-center justify-between px-6 py-4 text-red-700 font-bold text-lg hover:bg-gray-100 transition-all relative ${
                mobileDropdown === 2 ? "border-l-4 border-red-600 pl-4" : "pl-6"
            }`}
        >
            <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z"/>
</svg>
                <span>PROMOS</span>
            </div>
        </button>

        <div className={`flex flex-col overflow-hidden transition-all duration-300 transform origin-top ${mobileDropdown === 2 ? "opacity-100 scale-y-100 max-h-[500px]" : "opacity-0 scale-y-0 max-h-0"}`}>
            <a href="#helpCenter" className="flex items-center gap-3 py-2 px-6 text-red-600 hover:text-red-900">
                Help Center
            </a>
            <a href="#troubleshooting" className="flex items-center gap-3 py-2 px-6 text-red-600 hover:text-red-900">
                Troubleshooting
            </a>
            <a href="#billing" className="flex items-center gap-3 py-2 px-6 hover:text-gray-700">
                Billing & Payments
            </a>
            <a href="#reportIssue" className="flex items-center gap-3 py-2 px-6 hover:text-gray-700">
                Report an Issue
            </a>
            <a href="#contactUs" className="flex items-center gap-3 py-2 px-6 hover:text-gray-700">
                Contact Us
            </a>
        </div>
    </div>
</div>

<div className="w-full bg-white border-t border-gray-300 shadow-md">
    <div className="border-b border-gray-300">
        <button
            onClick={() => toggleMobileDropdown(3)}
            className={`w-full flex items-center justify-between px-6 py-4 text-red-700 font-bold text-lg hover:bg-gray-100 transition-all relative ${
                mobileDropdown === 3 ? "border-l-4 border-red-600 pl-4" : "pl-6"
            }`}
        >
            <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-inbound-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0"/>
</svg>
                <span>LANDLINE</span>
            </div>
        </button>

        <div className={`flex flex-col overflow-hidden transition-all duration-300 transform origin-top ${mobileDropdown === 3 ? "opacity-100 scale-y-100 max-h-[500px]" : "opacity-0 scale-y-0 max-h-0"}`}>
        <a href="#overview" className="block py-2 px-4 text-red-600 hover:text-red-900">Landline Plans</a>
        <a href="#features" className="block py-2 px-4 text-red-600 hover:text-red-900">Landline Features</a>
        <a href="#installation" className="block py-2 px-4 hover:text-gray-700">Installation Services</a>
        <a href="#bundles" className="block py-2 px-4 hover:text-gray-700">Bundle Offers</a>
        <a href="#support" className="block py-2 px-4 hover:text-gray-700">Landline Support</a>
        </div>
    </div>
</div>



<div className="w-full bg-white border-t border-gray-300 shadow-md">
    <div className="border-b border-gray-300">
        <button
            onClick={() => toggleMobileDropdown(4)}
            className={`w-full flex items-center justify-between px-6 py-4 text-red-700 font-bold text-lg hover:bg-gray-100 transition-all relative ${
                mobileDropdown === 4 ? "border-l-4 border-red-600 pl-4" : "pl-6"
            }`}
        >
            <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
</svg>
                <span>SUPPORT</span>
            </div>
        </button>

        <div className={`flex flex-col overflow-hidden transition-all duration-300 transform origin-top ${mobileDropdown === 4 ? "opacity-100 scale-y-100 max-h-[500px]" : "opacity-0 scale-y-0 max-h-0"}`}>
        <a href="#faq" className="block py-2 px-4 text-red-600 hover:text-red-800">FAQs</a>
        <a href="#contactSupport" className="block py-2 px-4 hover:text-gray-700">Contact Support</a>
        <a href="#reportIssue" className="block py-2 px-4 hover:text-gray-700">Report an Issue</a>
        <a href="#terms" className="block py-2 px-4 hover:text-gray-700">Terms & Conditions</a>
        </div>
    </div>
</div>

</div>

</div>


       

     


</div>

     

       
        </>
    )
 
}

export default Navbar