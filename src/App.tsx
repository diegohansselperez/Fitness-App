import { useState } from 'react';
import './index.css';
import Navbar from './scenes/Navbar';

import { SelectedPage } from './shared/types';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  return (
    <>
      <div className="app bg-gray-20 pt-2 ">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
    </>
  );
}

export default App;
