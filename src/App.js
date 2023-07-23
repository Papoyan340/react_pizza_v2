import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/index';
import { Cart, Home, NotFound } from './pages/index';

import './scss/app.scss';

export const SearchContext = React.createContext('');

function App() {
   //  .............. inchpes er araj stexcum component@ start ..................................................
   // return React.createElement('div', {className:"aaa"}, React.createElement('h1',{className: 'big'}, 'arii'))
   //  .............. inchpes er araj stexcum component@ end ....................................................

   // ............... linki hascen imanalu hamar start ..................
   // const pathname = window.location.pathname
   // ............... linki hascen imanalu hamar end ....................

  
   const [searcValue, setSearchValue] = React.useState('');

   

   return (
      <div className="wrapper">
   
         <SearchContext.Provider value={{ searcValue, setSearchValue }}>
            <Header />
            <div className="content">
               <div className="container">
                  <Routes>
                     <Route
                        path="/"
                        element={<Home searcValue={searcValue} setSearchValue={setSearchValue} />}
                     />
                     <Route path="/cart" element={<Cart />} />
                     <Route path="*" element={<NotFound />} />
                  </Routes>
               </div>
            </div>
         </SearchContext.Provider>
      </div>
   );
}

export default App;
