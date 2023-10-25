import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Navigation, BurgerMenu, Burger } from "./components";
import { Destinations } from "./routes";

import {selectBg} from './utils';

function App() {
  // keep track of selected tab
  const [tabSelected, setTabSelected] = useState(null);

  // //keep track of screen width for selecting bg image 
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    // set initial tab
    setTabSelected("home");
    setScreenWidth(window.innerWidth);
    
  }, [])

  const [open, setOpen] = useState(false);

  return (
      <div id='bg-img-container' style={{ backgroundImage: `url(/backgrounds/${selectBg(screenWidth, tabSelected)})` }}>
        <div className='side-drawer'>
        <BurgerMenu open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen}  />
      </div>  
 
        <Routes>
        <Route path="/" element={<Navigation tabSelector={setTabSelected} />}>
          
            <Route path="/destinations" element={<Destinations/>} />
          

       
        </Route>
      </Routes>
      </div>
      
    
  );
}

export default App;
