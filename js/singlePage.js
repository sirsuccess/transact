import createNode, {
  append,
  getElement,
  clickEvent,
  setImageAttribute,
  DisplayNone,
  setInnerHTML,
  DisplayBlock,
  getCurrentDate,
  asyncGetArticles,
  getStorage
  //   displayArticle
} from "./modules/index.js";

// global variable
const date = getElement(".date");
const setImg = getElement("#sliderImg");
const sliderText = getElement(".slider-text");



//date output
setInnerHTML(date, getCurrentDate());

//get id from session storage
let id = getStorage("articleID");

asyncGetArticles(
  `http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${id}`
)
  .then(data => {
    setImageAttribute(setImg, data.avatar);
    setInnerHTML(sliderText, data.title);
  })
  .catch(err => {
    console.log(err);
  });
