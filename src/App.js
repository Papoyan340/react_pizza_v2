import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';

import { Header } from './Components/index';
import {Cart, Home, NotFound} from './pages/index'

function App() {
   //  .............. inchpes er araj stexcum component@ start ..................................................
   // return React.createElement('div', {className:"aaa"}, React.createElement('h1',{className: 'big'}, 'arii'))
   //  .............. inchpes er araj stexcum component@ end ....................................................
   
   // ............... linki hascen imanalu hamar start ..................
   // const pathname = window.location.pathname
   // ............... linki hascen imanalu hamar end ....................

   return (
      <div className="wrapper">
         <Header />
         <div className="content">
            <div className="container">
               <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='*' element={<NotFound/>}/>
               </Routes>
              
            </div>
         </div>
      </div>
   );
}

export default App;
