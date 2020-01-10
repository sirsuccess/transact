import {
    getCurrentDate,
    setInnerHTML,
    getElement,
    clickEvent,
    DisplayNone,
    DisplayBlock,
    DisplayFlex
  } from "./modules/index.js";
  const HanburggerOpen = getElement(".fa-bars");
  const HanburggerClose = getElement(".fa-times");
  const mobileDropdown = getElement(".mobile-dropdown");
  const dateNav = getElement(".top-navbar");
  


export default function Navbar(){

    let toggleHanndle = true;

clickEvent(HanburggerOpen, () => {
  DisplayNone(dateNav);
  DisplayNone(HanburggerOpen);
  DisplayBlock(HanburggerClose);
  mobileDropdown.className = "mobile-dropdown-show";
  toggleHanndle = !toggleHanndle;
});
clickEvent(HanburggerClose, () => {
  DisplayNone(HanburggerClose);
  DisplayBlock(HanburggerOpen);
  DisplayFlex(dateNav);
  mobileDropdown.className = "mobile-dropdown";
  toggleHanndle = !toggleHanndle;
});
}