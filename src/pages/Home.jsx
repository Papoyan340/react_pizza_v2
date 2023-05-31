import React from 'react';
import {  Categories, Sort, PizzaBlock, PizzaBlockLoadet } from '../Components';

function Home() {

   const [dataPizzas, setDataPizzas] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(true);

   React.useEffect(() => {
      fetch('https://6471f2906a9370d5a41adb75.mockapi.io/items ')
         .then((response) => response.json())
         .then((data) => {
            setDataPizzas(data);
            setIsLoading(false);
         });
   }, []);


   return (
      <>
         <div className="content__top">
            <Categories />
            <Sort />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {isLoading
               ? [...new Array(8)].map((_, idx) => <PizzaBlockLoadet key={idx} />)
               : dataPizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
         </div>
      </>
   );
}

export default Home;
