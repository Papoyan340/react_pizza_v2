import React from 'react';
import { SearchContext } from "../App";
import { Categories, Sort, PizzaBlock, PizzaBlockLoadet, Pagination } from '../Components';


function Home() {
   const {searcValue} = React.useContext(SearchContext)
   const [dataPizzas, setDataPizzas] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(true);
   const [categoruId, setCategoruId] = React.useState(0);
   const [currentPage, setCurrentPage] = React.useState(1)
   const [sortType, setSortType] = React.useState({ name: 'популярности', sortproperty: 'rating' });

   React.useEffect(() => {
      // const url = new URL('https://6471f2906a9370d5a41adb75.mockapi.io/items');
      // filret start .........................
      // url.searchParams.append('sizes' , [40])
      // url.searchParams.append('types' , [0])
      // filret start ...........................

      // sort start .............................
      // url.searchParams.append('sortBy', 'price');
      // url.searchParams.append('order', 'desc');
      // sort end ..............................

      // pagination start .......................
      // url.searchParams.append('completed', false);
      // url.searchParams.append('page', 3);
      // url.searchParams.append('limit', 2);
      // pagination end .......................
      setIsLoading(true);

      const category = categoruId > 0 ? `category=${categoruId}&` : '';
      const order = sortType.sortproperty.includes('-') ? 'asc' : 'desc';
      const sortBy = sortType.sortproperty.replace('-', '');
      const search = searcValue ? `&search=${searcValue}` : ''
      const url = `https://6471f2906a9370d5a41adb75.mockapi.io/items?page=${currentPage}&limit=4&${category}sortBy=${sortBy}&order=${order}${search}`;
     
      fetch(url)
         .then((response) => response.json())
         .then((data) => {
            setDataPizzas(data);
            setIsLoading(false);
         });
      window.scrollTo(0, 1000);
   }, [categoruId, sortType, searcValue, currentPage]);

   const pizzas = dataPizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
   const skeleton = [...new Array(8)].map((_, idx) => <PizzaBlockLoadet key={idx} />);

   
   
   return (
      <>
         <div className="content__top">
            <Categories categoruId={categoruId} onClickCategories={(idx) => setCategoruId(idx)} />
            <Sort sortType={sortType} onClickSort={(obj) => setSortType(obj)} />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">{isLoading ? skeleton : pizzas}</div>
         <Pagination onChangePag = {(num) => setCurrentPage(num)}/>
      </>
   );
}

export default Home;
