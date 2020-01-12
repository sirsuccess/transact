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
  PostFetch
  //   displayArticle
} from "./modules/index.js";
const setImg = getElement("#sliderImg");
const sliderText = getElement(".slider-text");
const DeleteTrash = getElement(".fa-trash");
const titleInput = getElement("#title");
const urlInput = getElement("#url");
const avatarInput = getElement("#avatar");
const submitBtn = getElement(".submit-btn");
const preview = getElement("#avatarPreview");
let imgUrl = "";

export default function PostHandler() {
  clickEvent(submitBtn, e => {
    e.preventDefault();

    let createdAt = Date.now();
    let title = titleInput.value;
    let url = urlInput.value;
    const avatar = imgUrl;

    if (!title || !url || !avatar) {
      alert(" all filds must be fill");
      return;
    }

    const body = {
      createdAt,
      title,
      url,
      avatar
    };
    PostFetch(
      `https://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/`,
      body
    )
      .then(data => {
        alert("Posted successful");
        return RedirectFuntion("./index.html");
      })
      .catch(err => {
        console.log(err);
      });
  });
}

//read image file
avatarInput.addEventListener("change", () => {
  const file = getElement("input[type=file]").files[0];
  const reader = new FileReader();
  reader.addEventListener(
    "load",
    function() {
      DisplayBlock(preview);
      imgUrl = reader.result;
      // convert image file to base64 string
      preview.src = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
});
