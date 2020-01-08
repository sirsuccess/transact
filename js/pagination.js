import createNode, { append, getElement, clickEvent } from "./modules/index.js";

//global Variable

const ul = getElement(".list");
const back = getElement("#back");
const front = getElement("#front");

const latestArticle = getElement(".latest-article-body");

export default function Pagination(data) {
  let currentPage = 2;
  let dataPerPage = 10;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentTableData = data.slice(indexOfFirstData, indexOfLastData);

  const pageNumbers = [];
  let totaltableData = data.length;
  const totalNumberOfpage = Math.ceil(totaltableData / dataPerPage);
  for (let i = 1; i <= totalNumberOfpage; i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  //front and back movement
  clickEvent(back, () => {
    if (currentPage > 2) {
      front.disabled = false;
      currentPage -= 1;
      //   return setCurrentPage(currentPage - 1);
    }
    back.disabled = true;
    console.log("i am here back", currentPage);
  });
  clickEvent(front, () => {
    if (currentPage < totalNumberOfpage) {
      back.disabled = false;
      currentPage += 1;
      //   setCurrentPage(currentPage + 1);
    } else {
      front.disabled = true;
    }
    console.log("i am here front", currentPage);
  });

  pageNumbers.map(number => {
    let li = createNode("li");
    li.className = "listLI";
    clickEvent(li, () => {
      back.disabled = false;
      front.disabled = false;
      setCurrentPage(number);
      li.className = "active";
    });
    let span = createNode("span");
    span.innerHTML = number;
    append(li, span);
    append(ul, li);
  });
  return currentTableData;
}
