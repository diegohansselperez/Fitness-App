import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';

//type Props = {};

const Navbar = () => {
  const flexBetween = 'flex items-center justify-between';

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <section className={`${flexBetween} mx-auto w-5/6 `}>
          {' '}
          <img src={Logo} alt="logo evogym" />
          <div className={`${flexBetween} w-full gap-16 `}>
            <div className={`${flexBetween} w-full gap-8 `}>
              <p>Home</p>
              <p>Benefits</p>
              <p>Our Classes</p>
              <p>Contact Us</p>
            </div>
            <div className={`${flexBetween} gap-8 `}>
              <p>Sing In</p>
              <button>Become a Member</button>
            </div>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
