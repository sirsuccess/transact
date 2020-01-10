import createNode, {
  getElement,
  clickEvent,
  asyncGetArticles,
  append,
  DisplayNone,
  getDateTime,
  RedirectFuntion,
  SetStorage
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
      Pagination(data);
    })
    .catch(err => {
      console.log(err);
    });
}

export function displayLatestArticle(data) {
  data.forEach((item, index) => {
    let faTrash = getElement(".fa-trash");
    const li = createNode("li");
    let listItems = `<div class="latest-article-card" id=clickRedirect>
  
          <div class="latest-article-card-img">
              <img src=${item.avatar} alt="photo">
          </div>
          <div class="latest-article-card-title">
              <span class="latest-text">${item.title} </span>
              <div class="latest-article-card-details">
                  Views: <div class="views">
                      180,111
                  </div>
                  Comments: <div class="comments"> 87 </div> 
                  Posted: ${getDateTime(item.createdAt)}
              </div>
              
              <div class="article-category">View</div>
          </div>`;

    li.innerHTML = listItems;
    append(latestArticle, li);

    //click event to set session storage and redirect
    clickEvent(li, () => {
      SetStorage("articleID", item.id);
      return RedirectFuntion("./single-article.html");
    });
  });
}
