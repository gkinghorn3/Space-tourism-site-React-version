import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Navigation, BurgerMenu, Burger } from "./components";
import { Destinations } from "./routes";

import {selectBg} from './utils';

function App() {
  // keep track of selected tab
  const [tabSelected, setTabSelected] = useState(null);

  // //keep track of screen width for selecting bg image 
  const [screenWidth, setScreenWidth] = useState(null);

  const location = useLocation();


  useEffect(() => {
    setScreenWidth(window.innerWidth);
    
  }, [tabSelected])

  useEffect(() => {
    let currentPath = location.pathname.substring(1); // remove the leading '/'
    
    switch(currentPath) {
      case '':
        currentPath = 'home';
        break;
      case 'destinations':
        currentPath = 'destination';
        break;
      case 'crew':
        currentPath = 'crew';
        break;
      case 'technology':
        currentPath = 'technology';
        break;
      default:
        currentPath = 'home';
    }

    setTabSelected(currentPath);
  }, [location.pathname]);

  const [open, setOpen] = useState(false);

 console.log(tabSelected)
  return (
      <div id='bg-img-container' style={{ backgroundImage: `url(/backgrounds/${selectBg(screenWidth, tabSelected)})` }}>
        <div className='side-drawer'>
        <BurgerMenu open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen}  />
      </div>  
 
        <Routes>
        <Route path="/" element={<Navigation tabSelector={setTabSelected} tabSelected={tabSelected} />}>
          
            <Route path="/destinations" element={<Destinations/>} />
          

       
        </Route>
      </Routes>
      </div>
      
    
  );
}

export default App;
