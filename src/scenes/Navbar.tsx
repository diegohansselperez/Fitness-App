import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '../assets/Logo.png';
import Link from '../scenes/Link';
import { SelectedPage } from '../shared/types';
import useMediaQuery from '../hooks/useMediaQuery';
import ActionButton from '../shared/ActionButton';
type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  //fixed top-0 z-30 w-full py-6`
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1024px)');
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';

  return (
    <nav className={`${navbarBackground} p-2 top-0 z-30`}>
      <div className={` ${flexBetween} w-full mx-auto`}>
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
              className="rounded-full bg-secundary-500 p-1 border-none m-0"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-7 m-0 p-0 text-white" />
            </button>
          )}
        </section>
      </div>
      {/*MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/*CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
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
          <div className="flex flex-col p-[11%] text-center align-middle text-xl">
            <p>Sing In</p>
            <ActionButton setSelectedPage={setSelectedPage}>
              Become a Member
            </ActionButton>
          </div>{' '}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
