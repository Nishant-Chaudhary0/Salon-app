import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuSquareScissors } from 'react-icons/lu';

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = () => {
    try {
      navigate('/login');
    } catch {}
  };

  return (
    <header className="bg-white border-b-2 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between pr-2">
        {/* Brand */}
        <div className="text-lg md:text-xl text-white bg-black w-[12rem] p-2 md:p-3 flex gap-1 items-center">
         <LuSquareScissors className=''/> WellCare Salon
        </div>

        {/* Desktop Menus */}
        <div className="hidden md:flex items-center gap-2">
          {/* Services */}
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn bg-white text-black hover:underline border-none shadow-none">
              Services
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-50 w-64 p-2 shadow-sm">
              <li><a>Haircut & Styling</a></li>
              <li><a>Hair Coloring & Highlights</a></li>
              <li><a>Hair Spa & Treatment</a></li>
              <li><a>Shampoo & Blow Dry</a></li>
              <li><a>Bridal & Party Makeup</a></li>
              <li><a>Facials & Clean-up</a></li>
              <li><a>Skin Treatments (Peel, Brightening, Anti-Ageing)</a></li>
              <li><a>Waxing & Threading</a></li>
              <li><a>Manicure & Pedicure</a></li>
              <li><a>Nail Art & Extensions</a></li>
              <li><a>Beard Grooming & Shaving</a></li>
              <li><a>Massage & Relaxation Therapy</a></li>
            </ul>
          </div>

          {/* Location */}
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn bg-white text-black hover:underline border-none shadow-none">
              Location
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm">
              <li><a>New Delhi</a></li>
              <li><a>Mumbai</a></li>
              <li><a>Kolkata</a></li>
              <li><a>Chennai</a></li>
              <li><a>Bengaluru</a></li>
              <li><a>Hyderabad</a></li>
              <li><a>Pune</a></li>
              <li><a>Ahmedabad</a></li>
              <li><a>Jaipur</a></li>
              <li><a>Lucknow</a></li>
            </ul>
          </div>
        </div>

        {/* Right: CTA + Hamburger */}
        <div className="flex items-center gap-2">
          <button
            className="btn bg-[#dd1f4b] text-white border-[#dd1f4b] border w-[7rem] md:w-[12rem]"
            onClick={handleClick}
          >
            <svg aria-label="Email icon" width="16" height="16" viewBox="0 0 24 24" className='hidden md:block'>
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <span className="ml-1">Login with Email</span>
          </button>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden btn btn-ghost"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Panel */}
      {mobileOpen && (
        <div className="md:hidden border-t px-3 pb-3">
          <details className="group">
            <summary className="cursor-pointer py-2 font-medium">Services</summary>
            <ul className="menu bg-base-100 rounded-box w-full p-2 shadow-sm">
              <li><a>Haircut & Styling</a></li>
              <li><a>Hair Coloring & Highlights</a></li>
              <li><a>Hair Spa & Treatment</a></li>
              <li><a>Shampoo & Blow Dry</a></li>
              <li><a>Bridal & Party Makeup</a></li>
              <li><a>Facials & Clean-up</a></li>
              <li><a>Skin Treatments (Peel, Brightening, Anti-Ageing)</a></li>
              <li><a>Waxing & Threading</a></li>
              <li><a>Manicure & Pedicure</a></li>
              <li><a>Nail Art & Extensions</a></li>
              <li><a>Beard Grooming & Shaving</a></li>
              <li><a>Massage & Relaxation Therapy</a></li>
            </ul>
          </details>

          <details className="group mt-2">
            <summary className="cursor-pointer py-2 font-medium">Location</summary>
            <ul className="menu bg-base-100 rounded-box w-full p-2 shadow-sm">
              <li><a>New Delhi</a></li>
              <li><a>Mumbai</a></li>
              <li><a>Kolkata</a></li>
              <li><a>Chennai</a></li>
              <li><a>Bengaluru</a></li>
              <li><a>Hyderabad</a></li>
              <li><a>Pune</a></li>
              <li><a>Ahmedabad</a></li>
              <li><a>Jaipur</a></li>
              <li><a>Lucknow</a></li>
            </ul>
          </details>
        </div>
      )}
    </header>
  );
};

export default Navbar;
