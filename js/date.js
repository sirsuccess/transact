
import {
    getCurrentDate,
    setInnerHTML,
    getElement,
  } from "./modules/index.js";
  const todayDate = getElement(".date");

export default function CurrentDate() {
    setInnerHTML(todayDate, getCurrentDate());
    
}