import _ from "lodash"; //lodash = optimized version of library 'underscore'

//paginate function
export function paginate(items, pageNumber, pageSize) {
  //starting index of the items on pageNumber-page
  const startIndex = (pageNumber - 1) * pageSize;

  //use lodash to this startIndex and take all the items for the current page
  //_.slice(items, startIndex); //this method will slice the array starting from startIndex
  //go to this array and pick items for the current page
  //_.take(); //give an array and the total number of items we want to take from that array

  //call these lodash methods using a chain
  //first we need to convert the items-array to a lodash wrapper
  //and then with value() turn this lodash wrapper object to a regular array
  return _(items).slice(startIndex).take(pageSize).value();
}
