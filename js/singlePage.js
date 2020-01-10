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
  RedirectFuntion,
  EditFetch
  //   displayArticle
} from "./modules/index.js";
import Navbar from "./navbar.js";
import CurrentDate from "./date.js";
import Modal from "./modal.js";

const setImg = getElement("#sliderImg");
const sliderText = getElement(".slider-text");
const DeleteTrash = getElement(".fa-trash");
const titleInput = getElement("#title");
const urlInput = getElement("#url");
const avatarInput = getElement("#avatar");
const submitBtn = getElement(".submit-btn");

//navbar toggle
Navbar();

//date output
CurrentDate();

//toggle modal
Modal();

//get id from session storage
let id = getStorage("articleID");

//get fetch item
asyncGetArticles(
  `http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${id}`
)
  .then(data => {
    setImageAttribute(setImg, data.avatar);
    setInnerHTML(sliderText, data.title);

    //set the value of input
    titleInput.value = data.title;
    urlInput.value = data.url;
    avatarInput.value = data.avatar;

    //click event for POST
    clickEvent(submitBtn, e => {
      e.preventDefault();
      let createdAt = Date.now();
      let title = titleInput.value ? titleInput.value : data.title;
      let url = urlInput.value ? urlInput.value : data.url;
      const avatar = avatarInput.value ? avatarInput.value : data.avatar;

      const body = {
        createdAt,
        title,
        url,
        avatar
      };
      EditFetch(
        `http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${id}`,
        body
      )
        .then(data => {
          alert("Upate successful");
          return RedirectFuntion("./single-article.html");
        })
        .catch(err => {
          console.log(err);
        });
    });
  })
  .catch(err => {
    console.log(err);
  });

//click event for delete
clickEvent(DeleteTrash, () => {
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
