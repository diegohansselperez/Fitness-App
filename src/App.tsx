import { useState } from 'react';
import './index.css';
import Navbar from './scenes/Navbar';

enum SelectdPage {
  Home = 'home',
  Benefits = 'benefit',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}

function App() {
  const [selectedPage, setSelectedPage] = useState<string>('home');
  return (
    <>
      <div className="app bg-gray-20 ">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
    </>
  );
}

export default App;
