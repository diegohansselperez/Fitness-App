A;
import useMediaQuery from '../hooks/useMediaQuery';
import ActionButton from '../shared/ActionButton';
import { SelectedPage } from '../shared/types';
import HomePageText from '../assets/HomePageText.png';
import HomePageGraphic from '../assets/HomePageGraphic.png';
import SponsorRedBull from '../assets/SponsorRedBull.png';
import SponsorForbes from '../assets/SponsorForbes.png';
import SponsorFortune from '../assets/SponsorFortune.png';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    cosnt isAboveMediumScreens = useMediaQuery("")
  return <div>Home</div>;
};

export default Home;
