import createNode, { append, getElement, clickEvent } from "./modules/index.js";
import { displayLatestArticle } from "./latest.js";

//global Variable

const ul = getElement(".list");
const back = getElement("#back");
const front = getElement("#front");

export default function Pagination(data) {
  let currentPage = 5;
  let dataPerPage = 10;
  const setCurrentPage = currentPage => {
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentTableData = data.slice(indexOfFirstData, indexOfLastData);
    displayLatestArticle(currentTableData);
    return;
  };

  const pageNumbers = [];
  let totaltableData = data.length;
  const totalNumberOfpage = Math.ceil(totaltableData / dataPerPage);
  for (let i = 1; i <= totalNumberOfpage; i++) {
    pageNumbers.push(i);
  }

  //front and back movement
  clickEvent(back, () => {
    let latestArticle = getElement(".latest-article-body");
    if (currentPage > 2) {
      back.disabled = false;
      front.disabled = false;
      currentPage -= 1;
      //remove previous data
      while (latestArticle.firstChild) {
        latestArticle.removeChild(latestArticle.firstChild);
      }
      setCurrentPage(currentPage);
    } else {
      back.disabled = true;
    }
  });
  clickEvent(front, () => {
    const latestArticle = getElement(".latest-article-body");
    if (currentPage < totalNumberOfpage) {
      back.disabled = false;
      front.disabled = false;
      currentPage += 1;
      //remove previous data
      while (latestArticle.firstChild) {
        latestArticle.removeChild(latestArticle.firstChild);
      }
      setCurrentPage(currentPage);
    } else {
      front.disabled = true;
    }
    console.log("i am here front", currentPage);
  });

  paginationNum(pageNumbers, setCurrentPage);
  return setCurrentPage(currentPage);
}

/**
 * handle pagination numbering
 * @param: pageNumbers
 * @funtion: setCurrentPage
 */
function paginationNum(pageNumbers, setCurrentPage) {
  pageNumbers.map(number => {
    let li = createNode("li");
    li.className = "listLI";
    clickEvent(li, () => {
      back.disabled = false;
      front.disabled = false;
      const latestArticle = getElement(".latest-article-body");
      //remove previous data
      while (latestArticle.firstChild) {
        latestArticle.removeChild(latestArticle.firstChild);
      }
      setCurrentPage(number);
      li.className = "active";
    });
    let span = createNode("span");
    span.innerHTML = number;
    append(li, span);
    append(ul, li);
  });
}
