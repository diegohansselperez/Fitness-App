import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '../assets/Logo.png';
import Link from '../scenes/Link';
import { SelectedPage } from '../shared/types';
import useMediaQuery from '../hooks/useMediaQuery';
import ActionButton from '../shared/ActionButton';
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  //fixed top-0 z-30 w-full py-6`
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1024px)');
  return (
    <nav>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <section className={`${flexBetween} w-full gap-16 `}>
          {' '}
          <img src={Logo} alt="logo evogym" />
          {isAboveMediumScreens ? (
            <>
              {' '}
              <div className={`${flexBetween} w-full `}>
                <div className={`${flexBetween} gap-8 text-sm`}>
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
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>{' '}
              </div>
            </>
          ) : (
            <button
              className="rounded-full bg-secundary-500 p-2 border-none m-0"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-5 w-6 text-white" />
            </button>
          )}
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
