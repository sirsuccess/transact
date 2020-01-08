export default function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

export function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}
export function getElement(node) {
  return document.querySelector(node);
}

export function clickEvent(element, func) {
  return element.addEventListener("click", func);
}

export function setImageAttribute(element, imgDir) {
  element.setAttribute("src", imgDir);
}

export function DisplayNone(target) {
  target.style.display = "none";
}

export function setInnerHTML(target, value) {
  target.innerHTML = value;
}

export function DisplayBlock(target) {
  target.style.display = "block";
}
export function DisplayInline(target) {
  target.style.display = "inline";
}

/***
 * @retuns : currrent date
 */
export function getCurrentDate() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  const monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];

  mm = monthArr[mm - 1];
  today = dd + ", " + mm + " " + yyyy;
  return today;
}



/**
 *get  all articles;
 *
 * @param {*} url
 * @returns
 */
export async function asyncGetArticles(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
}

export function RedirectFuntion(destination) {
  return (window.location.href = destination);
}

export function SetStorage(name, value) {
  //get id from session storage
  return sessionStorage.setItem(name, value);
}
export function getStorage(name) {
  //get id from session storage
  return sessionStorage.getItem();
}


