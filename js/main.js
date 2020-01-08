import Trending from "./trending.js";
import LatestArticle from "./latest.js";
import Modal from "./modal.js";
import { getCurrentDate, setInnerHTML, getElement } from "./modules/index.js";
const todayDate = getElement(".date");

Trending();
LatestArticle();
Modal();

setInnerHTML(todayDate, getCurrentDate());


