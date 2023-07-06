import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './redux/slices/filterSlices'
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

   const count = useSelector((state) => state.counter.value);
   const dispatch = useDispatch();
   console.log(count);
   const [searcValue, setSearchValue] = React.useState('');

   const obj = {
      id: 5,
      name: 'alla',
      age: 32
   }

   return (
      <div className="wrapper">
         <div>
            <div>
               <button onClick={()=>dispatch(addUser(obj))}>add</button>
               {
                  count.map((el)=> <div key={el.id}>
                     <h1>{el.name}</h1>
                     <p>{el.age}</p>
                  </div>)
               }
            </div>
         </div>

         {/* <SearchContext.Provider value={{ searcValue, setSearchValue }}>
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
         </SearchContext.Provider> */}
      </div>
   );
}

export default App;
