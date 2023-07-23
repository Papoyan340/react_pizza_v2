import React from 'react';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

function Categories({categoryId, onClickCategories}) {

   // const [activeIndex, setActiveIndex] = React.useState(0);
   // const onClickCategories = React.useCallback((idx) => {
   //       setActiveIndex(idx);
   //    },[activeIndex]);

  
   return (
      <div className="categories">
         <ul>
            {/* <li className="active">Все</li>
            <li>Мясные</li>
            <li>Вегетарианская</li>
            <li>Гриль</li>
            <li>Острые</li>
            <li>Закрытые</li> */}

            {categories.map((el, idx) => (
               <li
                  key={`${el}_${idx}`}
                  onClick={() => onClickCategories(idx)}
                  className={categoryId  === idx ? 'active' : ''}>
                  {el}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Categories;
