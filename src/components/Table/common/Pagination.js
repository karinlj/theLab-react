import React from "react";
import _ from "lodash"; //lodash = optimized version of library 'Underscore'
//import propTypes from "prop-types";

//pagination list items - (page numbers)
const Pagination = props => {
  //input: -total number of items (itemsCount)
  //        -items/page (pageSize)
  //        -current page

  const { itemsTotal, pageSize, onPageChange, currentPage } = props;
  console.log("currentPage", currentPage);
  console.log("itemsTotal", itemsTotal);
  console.log("pageSize", pageSize);

  //how many pages? Round up to integer
  const pagesCount = Math.ceil(itemsTotal / pageSize);
  if (pagesCount === 0) return null;
  //console.log(pagesCount);
  //pages = items / (items/page) =>  ? = 12 / 4 = 3

  //render pagination dynamically based on total number of items - can vary - (itemsCount) and items/page (pageSize)
  //Need array of page numbers: pages = [1, 2, 3].map(item => <li></li>)
  //pageNumbers = [1....pagesCount +1].map(item => <li></li>)
  //must add last nr because method does not include last nr
  //js-library Lodash:
  //array:
  const pages = _.range(1, pagesCount + 1);

  //const activeClass;

  return (
    /*take the pages-array and map it to a list item 
     render class dynamically: active or not 
     when we click on a page-link, an event is raised  */

    /*    <nav>
      <ul className="pagination">
  
        {pages.map(page =>
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a href="/" className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        )}
      </ul>
    </nav> */

    <nav>
      <ul className="pagination">
        {pages.map(page =>
          <li className="page-item" key={page}>
            {/* page from map */}
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Pagination;
//add the props for our comp as well as their types
/* Pagination.propTypes = {
  itemsTotal: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired
  onPageChange: propTypes.func.isRequired
  currentPage: propTypes.number.isRequired
}; */
