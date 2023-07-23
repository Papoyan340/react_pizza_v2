import React, { useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';
const list = [
   { name: 'популярности (DESC)', sortproperty: 'rating' },
   { name: 'популярности (ASC)', sortproperty: '-rating' },
   { name: 'цене (DESC)', sortproperty: 'price' },
   { name: 'цене (ASC)', sortproperty: '-price' },
   { name: 'алфавиту (DESC)', sortproperty: 'title' },
   { name: 'алфавиту (ASC)', sortproperty: '-title' },
];
function Sort({sort}) {
   const dispatch = useDispatch()
   const [open, setOpen] = React.useState(false);


   const handleMouseClick = () => setOpen(false);
   useEffect(() => {
      window.addEventListener('click', handleMouseClick);
      return () => window.removeEventListener('click', handleMouseClick);
   }, [open]);

   const onClickSortList = (e, obj) => {
      e.stopPropagation();
      dispatch(setSort(obj))
      // onClickSort(obj);
      setOpen((prev) => !prev);
   };

 

   return (
      <div className="sort">
         <div className="sort__label">
            <svg
               width={10}
               height={6}
               viewBox="0 0 10 6"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                  fill="#2C2C2C"
               />
            </svg>
            <b>Сортировка по:</b>
            <span
               onClick={(e) => {
                  e.stopPropagation();
                  setOpen((prev) => !prev);
               }}>
               {sort.name}
            </span>
         </div>
         {open && (
            <div className="sort__popup">
               <ul>
                  {list.map((obj, idx) => (
                     <li
                        key={idx}
                        onClick={(e) => onClickSortList(e, obj)}
                        className={sort.sortproperty === obj.sortproperty ? 'active' : ''}>
                        {obj.name}
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
}

export default memo(Sort, (prev, next)=> JSON.stringify(prev) === JSON.stringify(next));

