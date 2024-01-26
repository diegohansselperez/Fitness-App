import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from '../scenes/Link';
type Props = { selectedPage: string; setSelectedPage: (value: string) => void };

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  //fixed top-0 z-30 w-full py-6`
  return (
    <nav>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <section className={`${flexBetween} w-full gap-16 `}>
          {' '}
          <img src={Logo} alt="logo evogym" />
          <div className={`${flexBetween} w-full `}>
            <div className={`${flexBetween} gap-8  text-sm`}>
              <Link
                page="Home"
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
              <Link
                page="Benefits"
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
              <Link
                page="Our Classes"
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
              <Link
                page="Contact Us"
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
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
