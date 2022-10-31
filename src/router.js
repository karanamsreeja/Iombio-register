import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home";

function Router   ()  {   
    return (<>
    <div>
      <BrowserRouter >

          <Routes  >           
            <Route path='/' exact element={<Home/>} />
            </Routes> 
  
    </BrowserRouter>
    </div>
</>)  
}

export default Router;