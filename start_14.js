const headerWrepper = document.querySelector(".header__wrepper"); 
const headerWrepperSeasonings = document.querySelector(
  ".header__wrepper-seasonings"
); 
const headerWrepperDlete = document.querySelector(".header__wrepper-delete"); 
const headrСountТamber = document.querySelector(".headr__count-namber"); 

const headerPrice = document.querySelector(".header__price");
const headerCalories = document.querySelector(".header__calories");

let sum = [];

let q333 = [];
let sumCall = [];

let countNamber = document.querySelector(".count__namber ");
let countNamberSalad = document.querySelector(".count__namber-salad");
let countNamberPotatoes = document.querySelector(".count__namber-potatoes");
let countNamberSeasoning = document.querySelector(".count__namber-seasoning");
let countNamberMayonnaise = document.querySelector(".count__namber-mayonnaise");

let headerBtnDeleteCheese = document.querySelector(
  ".header__btn-delete-cheese"
);
let headerBtnDeleteSalad = document.querySelector(".header__btn-delete-salad");
let headerBtnDeletePotatoes = document.querySelector(
  ".header__btn-delete-potatoes"
);
let headerBtnDeleteSeasoning = document.querySelector(
  ".header__btn-delete-seasoning"
);
let headerBtnDeleteMayonnaise = document.querySelector(
  ".header__btn-delete-mayonnaise"
);

let countCheese = 0;
let countSalad = 0;
let countPotatoes = 0;
let countSeaaonings = 0;
let countMayonnaise = 0;

headerWrepperSeasonings.addEventListener("click", clickSeasonings);
function clickSeasonings(e) {
  add(e);
}
headerBtnDeleteCheese.disabled = true;
headerBtnDeleteSalad.disabled = true;
headerBtnDeletePotatoes.disabled = true;
headerBtnDeleteSeasoning.disabled = true;
headerBtnDeleteMayonnaise.disabled = true;

function add(e) {
  switch (true) {
    case e.target.getAttribute("data-id") === "1":
      headerBtnDeleteCheese.disabled = false;
      countCheese++;
      countNamber.innerHTML = countCheese;
      break;
    case e.target.getAttribute("data-id") === "2":
      headerBtnDeleteSalad.disabled = false;
      countSalad++;
      countNamberSalad.innerHTML = countSalad;
      break;
    case e.target.getAttribute("data-id") === "3":
      headerBtnDeletePotatoes.disabled = false;
      countPotatoes++;
      countNamberPotatoes.innerHTML = countPotatoes;
      break;
    case e.target.getAttribute("data-id") === "4":
      headerBtnDeleteSeasoning.disabled = false;
      countSeaaonings++;
      countNamberSeasoning.innerHTML = countSeaaonings;
      break;
    case e.target.getAttribute("data-id") === "5":
      headerBtnDeleteMayonnaise.disabled = false;
      countMayonnaise++;
      countNamberMayonnaise.innerHTML = countMayonnaise;
      break;
    default:
      console.log(`Sorry`);
  }
}
headerWrepperDlete.addEventListener("click", deliteSeasonings);
function deliteSeasonings(e) {
  delite(e);
}
function delite(e) {
  switch (true) {
    case e.target.getAttribute("data-id") === "1":
      countCheese--;
      countNamber.innerHTML = countCheese;
      if (countCheese <= 0) {
        countNamber.innerHTML = 0;
      }
      if (countCheese <= "0") {
        e.target.disabled = true;
      }
      break;
    case e.target.getAttribute("data-id") === "2":
      countSalad--;
      countNamberSalad.innerHTML = countSalad;
      if (countSalad <= "0") {
        countNamberSalad.innerHTML = 0;
      }
      if (countSalad <= "0") {
        e.target.disabled = true;
      }
      break;
    case e.target.getAttribute("data-id") === "3":
      countPotatoes--;
      countNamberPotatoes.innerHTML = countPotatoes;
      if (countPotatoes <= "0") {
        countNamberPotatoes.innerHTML = 0;
      }
      if (countPotatoes <= "0") {
        e.target.disabled = true;
      }
      break;
    case e.target.getAttribute("data-id") === "4":
      countSeaaonings--;
      countNamberSeasoning.innerHTML = countSeaaonings;
      if (countSeaaonings <= "0") {
        countNamberSeasoning.innerHTML = 0;
      }
      if (countSeaaonings <= "0") {
        e.target.disabled = true;
      }
      break;

    case e.target.getAttribute("data-id") === "5":
      countMayonnaise--;
      countNamberMayonnaise.innerHTML = countMayonnaise;
      if (countMayonnaise <= "0") {
        countNamberMayonnaise.innerHTML = 0;
      }
      if (countMayonnaise <= "0") {
        e.target.disabled = true;
      }
      break;
    default:
      console.log(`Sorry3`);
  }
}

const contener = document.querySelector(".contener");
const btnSeasonings = document.querySelectorAll(".btn-seasonings");
const btnDelete = document.querySelectorAll(".btn-delete");

contener.addEventListener("click", clicContenerBTN);
function clicContenerBTN(e) {
  if (e.target.classList.contains("btn")) {
    let sizePrise = e.target.getAttribute("data-sum");
    let sizeCall = e.target.getAttribute("data-call");
    sizePrise = +sizePrise;
    sizeCall = +sizeCall;
    sum.push(sizePrise);
    sumCall.push(sizeCall);
    let resultSize = sum.reduce(function (sum, elem) {
      return sum + elem;
    }, 0);
    let resultCall = sumCall.reduce(function (sum, elem) {
      return sum + elem;
    }, 0);
    headerPrice.innerHTML = `ЦЕНА БУРГЕРА : ${resultSize} тугриков`;
    headerCalories.innerHTML = `КОЛИЧЕСТВО КАЛОРИЙ В БУРГЕРЕ  : ${resultCall} калл`;
  }
}
contener.addEventListener("click", clicContener);
function clicContener(e) {
  if (e.target.classList.contains("btn-seasonings")) {
    let cheese = e.target.getAttribute("data-sum");
    let cheeseCall = e.target.getAttribute("data-call");
    cheese = +cheese;
    cheeseCall = +cheeseCall;
    sum.push(cheese);
    sumCall.push(cheeseCall);
    let result = sum.reduce(function (sum, elem) {
      return sum + elem;
    }, 0);
    let resultCall = sumCall.reduce(function (sum, elem) {
      return sum + elem;
    }, 0);
    headerPrice.innerHTML = `ЦЕНА БУРГЕРА : ${result} тугриков`;
    headerCalories.innerHTML = `КОЛИЧЕСТВО КАЛОРИЙ В БУРГЕРЕ  : ${resultCall} калл`;
  }
}
contener.addEventListener("click", clicContenerDelete);
function clicContenerDelete(e) {
  if (e.target.classList.contains("btn-delete")) {
    let cheese = e.target.getAttribute("data-sum");
    let cheeseCall = e.target.getAttribute("data-call");
    cheese = +cheese;
    cheeseCall = +cheeseCall;
    sum.push(cheese);
    sumCall.push(cheeseCall);
    let result = sum.reduce(function (sum, elem) {
      return sum + elem;
    }, 0);
    let resultCall = sumCall.reduce(function (sum, elem) {
      return sum + elem;
    }, 0);
    headerPrice.innerHTML = `ЦЕНА БУРГЕРА : ${result} тугриков`;
    headerCalories.innerHTML = `КОЛИЧЕСТВО КАЛОРИЙ В БУРГЕРЕ  : ${resultCall} калл`;
  }
}
