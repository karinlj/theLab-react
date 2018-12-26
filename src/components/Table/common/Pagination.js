import React from "react";
import _ from "lodash"; //lodash = optimized version of library 'underscore'
import propTypes from "prop-types";

//here we return the pagination list items - (page numbers)
const Pagination = props => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props; //props we use

  // console.log(currentPage);

  //input: Total number of items, page size=how many items/page
  //input: current page

  const pagesCount = Math.ceil(itemsCount / pageSize); //hur många sidor behövs
  if (pagesCount === 0) return null;

  //console.log(pagesCount); //2.25

  //render pagination dynamically based on the number of items & items/page
  //pages = items / (items/page) =>  ? = 9 / 4     (2.25(3))
  //array of page numbers: pages = [1, 2, 3].map(item => <li></li>)
  //pageNumbers = [1....pagesCount].map(item => <li></li>)
  //we take help from js-library Lodash:
  //array:
  const pages = _.range(1, pagesCount + 1); //must add last nr because method does not include last nr
  return (
    <nav>
      <ul className="pagination">
        {/* take the pages-array and map it to a list item */}
        {pages.map(page =>
          <li
            key={page}
            /* render class dynamically: active or not */
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            {/* when we click on a page-link, an event is raised */}
            <a href="/" className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  //add the props for our comp as well as their types
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
  currentPage: propTypes.number.isRequired
};
export default Pagination;
