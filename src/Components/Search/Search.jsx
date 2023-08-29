import React from 'react';
import debounce from 'lodash.debounce';
import { useDispatch} from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';



import styles from './Searc.module.scss';

function Search() {
   const inpRef = React.useRef();
   const [value, setValus] = React.useState('')
   const dispatch = useDispatch()

   const onClickfocus = () => {
      inpRef.current.focus();
      dispatch(setSearchValue(''))
      setValus('');
   };


   const updateSearshValue = React.useCallback(
      debounce((txt) => {
         dispatch(setSearchValue(txt))
      }, 1000),
      [],
   );
   const onChangeInput = (e) => {
      // dispatch(setSearchValue(e.target.value))
      setValus(e.target.value);
      updateSearshValue(e.target.value);
   };

   

   return (
      <div className={styles.root}>
         <svg className={styles.searchIcon} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M31 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-13-13-13s-13 5.82-13 13 5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55v1.58l10 9.98 2.98-2.98-9.98-10zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" />
            <path d="M0 0h48v48h-48z" fill="none" />
         </svg>
         <input
            ref={inpRef}
            value={value}
            onChange={(e) => onChangeInput(e)}
            className={styles.input}
            type="text"
            placeholder="поиск пиццы ..."
         />
         <svg
            onClick={() => onClickfocus()}
            className={styles.closeIcon}
            version="1.1"
            viewBox="0 0 80 80"
            xmlns="http://www.w3.org/2000/svg">
            <title />
            {value && (
               <g id="Layer_2">
                  <g id="Layer_3">
                     <path d="M40,5.4C20.9,5.4,5.4,20.9,5.4,40c0,19.1,15.5,34.6,34.5,34.6S74.5,59.1,74.6,40c0,0,0,0,0,0C74.5,20.9,59.1,5.5,40,5.4z     M40,71.6C22.6,71.6,8.4,57.4,8.4,40C8.4,22.6,22.6,8.4,40,8.4c17.4,0,31.6,14.1,31.6,31.5c0,0,0,0,0,0    C71.5,57.4,57.4,71.5,40,71.6z" />
                     <path d="M40,14.9c-13.8,0-25.1,11.2-25.1,25.1h3c0-12.2,9.9-22.1,22.1-22.1V14.9z" />
                     <polygon points="49.2,28.7 40,37.9 30.8,28.7 28.7,30.8 37.9,40 28.7,49.2 30.8,51.3 40,42.1 49.2,51.3 51.3,49.2 42.1,40     51.3,30.8   " />
                  </g>
               </g>
            )}
         </svg>
      </div>
   );
}

export default React.memo(Search);
