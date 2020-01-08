import createNode, {
  getElement,
  clickEvent,
  setImageAttribute,
  asyncGetArticles,
  append,
  DisplayNone,
  DisplayBlock,
  DisplayInline
} from "./modules/index.js";
import Pagination from "./pagination.js";

//global Variable
const latestArticle = getElement(".latest-article-body");
const latestLoader = getElement(".latest-loader");

export default function Trending() {
  asyncGetArticles(
    "http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article"
  )
    .then(data => {
      DisplayNone(latestLoader);
      function setCurrentPage(data) {
        // currentPage = pageNo;
        displayLatestArticle(data);
        // return currentPage;
      }

      //   setCurrentPage(data);
      displayLatestArticle(data);
      //   console.log(pageNumbers);
    })
    .catch(err => {
      console.log(err);
    });
}

function displayLatestArticle(data) {
  Pagination(data).forEach((item, index) => {
    const li = createNode("li");
    let listItems = `<div class="latest-article-card" id=clickRedirect>
  
          <div class="latest-article-card-img">
              <img src=${item.avatar} alt="photo">
          </div>
          <div class="latest-article-card-title">
              ${item.title} 
              <div class="latest-article-card-details">
                  Views: <div class="views">
                      180,111
                  </div>
                  Comments: <div class="comments"> 87 </div> 
                  Posted: ${item.createdAt}
              </div>
              
              <div class="article-category">View</div>
              <i class="fa fa-trash"></i>
          </div>`;

    li.innerHTML = listItems;
    append(latestArticle, li);
  });
}
