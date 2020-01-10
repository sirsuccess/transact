import {
  clickEvent,
  getElement,
  DisplayNone,
  DisplayBlock
} from "./modules/index.js";

const modal = getElement(".modal");
const cancelCircle = getElement(".cancel-circle");
const addArticle = getElement(".add-article");
const editArticle = getElement(".fa-edit");

//toggle modal
// DisplayNone(modal);

export default function ModalToggle() {
  clickEvent(cancelCircle || editArticle, () => {
    DisplayNone(modal);
  });

  clickEvent(addArticle || editArticle, () => {
    DisplayBlock(modal);
  });
}
