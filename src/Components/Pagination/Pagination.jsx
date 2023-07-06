import React from 'react'
import ReactPaginate from 'react-paginate';

import style from './Pagination.module.scss'

function Pagination({onChangePag}) {
  return (
   <ReactPaginate
   className={style.root}
   breakLabel="..."
   nextLabel=">"
   onPageChange={e => onChangePag(e.selected + 1)}
   pageRangeDisplayed={5}
   pageCount={3}
   previousLabel="<"
   renderOnZeroPageCount={null}
 />
  )
}

export default Pagination