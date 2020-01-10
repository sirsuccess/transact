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
  getStorage,
  DeleteFetch,
  RedirectFuntion
  //   displayArticle
} from "./modules/index.js";
import Navbar from "./navbar.js";
import CurrentDate from "./date.js";
import Modal from "./modal.js";

const setImg = getElement("#sliderImg");
const sliderText = getElement(".slider-text");
const DeleteTrash = getElement(".fa-trash");

//navbar toggle
Navbar();

//date output
CurrentDate();

/

//get id from session storage
let id = getStorage("articleID");

//get fetch item
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

  //click event for delete 
clickEvent(DeleteTrash, ()=>{
  if (confirm("Do you want to Delete this Article")) {
    DeleteFetch(
      `http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${id}`
    )
      .then(data => {
        alert("Delete successful");
        return RedirectFuntion("./index.html");
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    console.log("cancel request");
  }
});


