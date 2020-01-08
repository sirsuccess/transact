import {
    clickEvent,
    getElement,
    DisplayNone,
    DisplayBlock
  } from "./modules/index.js";
  
  const modal = getElement(".modal");
  const cancelCircle = getElement(".cancel-circle");
  const addArticle = getElement(".add-article");
  
  
  //toggle modal
  // DisplayNone(modal);

  export default function ModalToggle() {
    clickEvent(cancelCircle, () => {
        DisplayNone(modal);
      });
      
      clickEvent(addArticle, () => {
        DisplayBlock(modal);
      }); 
  }
  