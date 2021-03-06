import createNode, {
  getElement,
  clickEvent,
  setImageAttribute,
  asyncGetArticles,
  append,
  DisplayNone,
  DisplayBlock,
  DisplayInline,
  SetStorage,
  RedirectFuntion
} from "./modules/index.js";

//global Variable
const backward = getElement("#backward");
const forward = getElement("#forward");
const slideImage = getElement("#slideImage");
const trendImgText = getElement("#trendImgText");
const trendingCardBody = getElement(".trend-card-body");
const sliderLoader = getElement(".slider-loader");
const trendNavigation = getElement(".trend-navigation");
const clickRedirect = getElement(".trend-img-btn");
let startIndex = 0;
let IdArray = [];
export default function Trending() {
  asyncGetArticles(
    "https://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article?page=2&limit=5"
  )
    .then(data => {
      DisplayBlock(trendNavigation);
      DisplayNone(sliderLoader);
      setImageAttribute(slideImage, data[startIndex].avatar);
      trendImgText.innerHTML = data[startIndex].title;

      data.forEach((item, index) => {
        IdArray.push(Number(item.id));
        const li = createNode("li");
        let listItems = `<div class="trend-card">
            <div class="trend-card-img">
                <img src=${item.avatar} alt="photo">
        
            </div>
            <div class="trend-card-title">
                ${item.title}
            </div>
        </div>`;

        li.innerHTML = listItems;
        append(trendingCardBody, li);
        clickRedirect.setAttribute("id", startIndex);
        //click event to set slider image
        clickEvent(li, () => {
          startIndex = index;
          clickRedirect.setAttribute("id", IdArray[startIndex]);
          setImageAttribute(slideImage, data[index].avatar);
          trendImgText.innerHTML = data[startIndex].title;
        });
      });

      //handle trending image changing
      let interval = setInterval(() => {
        if (startIndex < data.length - 1) {
          startIndex += 1;
          // index = startIndex;
          clickRedirect.setAttribute("id", IdArray[startIndex]);
          setImageAttribute(slideImage, data[startIndex].avatar);
          trendImgText.innerHTML = data[startIndex].title;
          backward.disabled = false;
          forward.disabled = false;
        } else {
          startIndex = -1;
        }
      }, 6000);

      //click event to set session storage and redirect
      clickEvent(clickRedirect, () => {
        SetStorage("articleID", IdArray[startIndex]);
        return RedirectFuntion("./single-article.html");
      });

      let imageLength = data.length;
      //click event for forwrd button
      clickEvent(forward, function() {
        if (startIndex < imageLength - 1) {
          startIndex += 1;
          clickRedirect.setAttribute("id", startIndex);
          setImageAttribute(slideImage, data[startIndex].avatar);
          trendImgText.innerHTML = data[startIndex].title;
          backward.disabled = false;
        }
        if (startIndex != imageLength - 1) {
          forward.disabled = false;
        } else {
          forward.disabled = true;
        }
      });

      //click event for backward button
      clickEvent(backward, function() {
        if (startIndex > 0) {
          startIndex -= 1;
          clickRedirect.setAttribute("id", startIndex);
          setImageAttribute(slideImage, data[startIndex].avatar);
          trendImgText.innerHTML = data[startIndex].title;
          forward.disabled = false;
        }
        if (startIndex === 0 || startIndex === -1) {
          backward.disabled = true;
          forward.disabled = false;
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
}
