import React from 'react';
import axios from 'axios';
import qs from 'qs';

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setCategoruId, setPageCount, setFilters } from '../redux/slices/filterSlice';
import { Categories, Sort, PizzaBlock, PizzaBlockLoadet, Pagination } from '../Components';

import { SearchContext } from '../App';
import { sortList } from '../Components/Sort/Sort';

function Home() {
   const dispatch = useDispatch();
   const navogate = useNavigate();
   const isSearch = React.useRef(false);
   const isMounted = React.useRef(false);

   const { categoryId, sort, pageCount } = useSelector((store) => store.filter);
   const { searcValue } = React.useContext(SearchContext);
   const [dataPizzas, setDataPizzas] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(true);
   // const [currentPage, setCurrentPage] = React.useState(1)
   // const [sortType, setSortType] = React.useState({ name: 'популярности', sortproperty: 'rating' });

   const navigate = useNavigate();

   const fetchPizzas = () => {
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
      const category = categoryId > 0 ? `category=${categoryId}&` : '';
      const order = sort.sortproperty.includes('-') ? 'asc' : 'desc';
      const sortBy = sort.sortproperty.replace('-', '');
      const search = searcValue ? `&search=${searcValue}` : '';
      const url = `https://6471f2906a9370d5a41adb75.mockapi.io/items?page=${pageCount}&limit=4&${category}sortBy=${sortBy}&order=${order}${search}`;

      // fetch(url)
      //    .then((response) => response.json())
      //    .then((data) => {
      //       setDataPizzas(data);
      //       setIsLoading(false);
      //    });

      axios
         .get(url)
         .then((res) => {
            setDataPizzas(res.data);
            setIsLoading(false);
         })
         .catch((error) => {
            console.error(error);
            navogate('*');
         });
   };


   // ete popoxvel e inchvor category ev exel e arajin render@
   React.useEffect(() => {
      if (isMounted.current) {
       const queryString = qs.stringify({
          sortproperty: sort.sortproperty,
          categoryId,
          pageCount,
       });
       navigate(`?${queryString}`);
      }
      isMounted.current = true
    }, [categoryId, sort.sortproperty, pageCount]);

   // ete exel e araji render@ stugum enq URL hascen ev ayn pahum enq redax um 
   React.useEffect(() => {
      if (window.location.search) {
         const params = qs.parse(window.location.search.substring(1));
         const sort = sortList.find((obj) => obj.sortproperty === params.sortproperty);
         
         dispatch(
            setFilters({
               ...params,
               sort,
            }),
         );
         isSearch.current = true;
      }
   }, []);

   React.useEffect(() => {
      window.scrollTo(0, 0);
      if (!isSearch.current) {
         fetchPizzas();

      }
      isSearch.current = false
   }, [categoryId, sort.sortproperty, searcValue, pageCount]);


   const pizzas = dataPizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
   const skeleton = [...new Array(8)].map((_, idx) => <PizzaBlockLoadet key={idx} />);

   return (
      <>
         <div className="content__top">
            <Categories
               categoryId={categoryId}
               onClickCategories={(idx) => dispatch(setCategoruId(idx))}
            />
            <Sort sort={sort} />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">{isLoading ? skeleton : pizzas}</div>
         <Pagination pageCount={pageCount} onChangePag={(num) => dispatch(setPageCount(num))} />
      </>
   );
}

export default React.memo(Home);
