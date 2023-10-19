// cart
let btnAddCart = document.querySelectorAll(".add-cart");
let cartNumbers = document.querySelectorAll(".cartNumber");
let c = 0;

btnAddCart.forEach((item) => {
  item.addEventListener("click", (e) => {
    let btnItem = e.target;
    let product =
      btnItem.parentElement.parentElement.parentElement.parentElement;
    let productImg = product.querySelector(".container-fluid.three img").src;
    let productName = product.querySelector(
      ".container-fluid.three .card-title"
    ).innerText;
    let productPrice = product.querySelector(
      ".container-fluid.three .card-price"
    ).innerText;
    addToCart(productImg, productName, productPrice);
  });
});

function addToCart(productImg, productName, productPrice) {
  let addTr = document.createElement("tr");
  let trContent = `
        <tr>
        <td ><img style="width:100%;" src="${productImg}"/></td>
        <td><p class"title">${productName}</p></td>
        <td><p class="price">${productPrice}</p></td>
        <td ><input class="cart-quantity-input " type="number" value="1" min="1" max="10" ></td>
        <td ><i onclick="decreaseNumber()" class="fa-solid fa-trash-can cart-delete btn btn-danger"></i></td>
        </tr>`;
  addTr.innerHTML = trContent;
  let cartTr = document.querySelector("#modalBody");
  cartTr.appendChild(addTr);
  updateCartTotal();
  quantityUpdate();
  deleteCart();
  increaseNumber();
}

function updateCartTotal() {
  let cartItem = document.querySelectorAll("tbody tr");
  let sum = 0;
  for (let i = 0; i < cartItem.length; i++) {
    let inputTotalValue = cartItem[i].querySelector("input").value;
    let productPrice = cartItem[i]
      .querySelector(".price")
      .innerHTML.replace("$", "");
    m = inputTotalValue * productPrice;
    sum += m;
  }
  document.getElementById("total").innerHTML = "$" + sum;
}

function deleteCart() {
  let cartDeleteBtn = document.querySelectorAll(".cart-delete");
  let cartItem = document.querySelectorAll("tbody tr");
  for (let i = 0; i < cartItem.length; i++) {
    cartDeleteBtn.forEach((item) => {
      item.addEventListener("click", (e) => {
        let cartDelete = e.target;
        let cartProducts = cartDelete.parentElement.parentElement;
        cartProducts.remove();
        updateCartTotal();
      });
    });
  }
}

function quantityUpdate() {
  let cartItem = document.querySelectorAll("tbody tr");
  for (let i = 0; i < cartItem.length; i++) {
    let inputValue = cartItem[i].querySelector("input");
    inputValue.addEventListener("change", () => {
      updateCartTotal();
    });
  }
}

function increaseNumber() {
  c = c + 1;
  cartNumbers.forEach((item) => {
    item.innerHTML = c;
    // console.log(c)
  });
}
function decreaseNumber() {
  c = c - 1;
  cartNumbers.forEach((item) => {
    item.innerHTML = c;
  });
}

// cart

// scrollTop
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", function () {
  var scroll = this.document.querySelector(".scrollTop");
  scroll.classList.toggle("active", window.scrollY > 500);
});
// scrollTop

// Display Time
function displayTime() {
  const now = new Date();
  let hh = now.getHours();
  let mm = now.getMinutes();
  let ss = now.getSeconds();
  let time;
  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  const timeString = [hh, mm, ss];
  if (time) {
    clearTimeout(time);
  }
  document.getElementById("time").innerHTML = timeString.join(":");
  time = setTimeout(displayTime, 1000);
  const session = document.getElementById("session");
  if (hh >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }
}
displayTime();

function displayDate() {
  const date = new Date();
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Sarturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.getElementById("date").innerHTML =
    "Today is " +
    day[date.getDay()] +
    ", " +
    months[date.getMonth()] +
    " " +
    date.getDate() +
    " " +
    date.getFullYear();
}
displayDate();
// Display Time

// Send button
let button = document.querySelector(".container-fluid.ten .button");
let buttonText = document.querySelector(".container-fluid.ten .btn");

buttonText.innerHTML = "SEND";

function submit() {
  const tickMark = '<i class="fa-solid fa-check"></i>';
  if (buttonText.innerHTML != "SEND") {
    buttonText.innerHTML = "SEND";
  } else {
    buttonText.innerHTML = tickMark;
  }
  button.classList.toggle("button-circle");
}
// Send button

// Validate Form
const contactName = document.getElementById("name");
const contactMail = document.getElementById("email");
const contactSubject = document.getElementById("subject");
const contactMessage = document.getElementById("message");
const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const errorName = document.getElementById("name-error");
const errorEmail = document.getElementById("email-error");
const errorSubject = document.getElementById("subject-error");
const errorMessage = document.getElementById("message-error");

function validateName() {
  if (contactName.value.length == 0) {
    errorName.style.color = "red";
    errorName.innerHTML = "Name is required";
    return false;
  } else if (contactName.value.match(specialChars)) {
    errorName.style.color = "red";
    errorName.innerHTML = "Only characters A-Z, a-z and 0-9 are allowed!";
    return false;
  } else if (contactName.value.length < 6 || contactName.value.length > 30) {
    errorName.style.color = "red";
    errorName.innerHTML =
      "The name must be more than 6 and less than 30 characters long";
    return false;
  } else if (contactName.value.length > 6 || contactName.value.length < 30) {
    errorName.style.color = "mediumseagreen";
    errorName.innerHTML = "Name Valid";
    return true;
  } else {
    errorName.style.color = "mediumseagreen";
    errorName.innerHTML = "Name Valid";
    return true;
  }
}
function validateEmail() {
  if (contactMail.value.length == 0) {
    errorEmail.style.color = "red";
    errorEmail.innerHTML = "Email is required";
    return false;
  } else if (
    !contactMail.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    errorEmail.style.color = "red";
    errorEmail.innerHTML = "Email Invalid";
    return false;
  } else {
    errorEmail.style.color = "mediumseagreen";
    errorEmail.innerHTML = "Email Valid";
    return true;
  }
}
function validateSubject() {
  if (contactSubject.value.length == 0) {
    errorSubject.style.color = "red";
    errorSubject.innerHTML = "Subject is required";
    return false;
  } else if (contactSubject.value.length > 0) {
    errorSubject.innerHTML = "";
    return true;
  } else {
    return true;
  }
}
function validateMessage() {
  if (contactMessage.value.length == 0) {
    errorMessage.style.color = "red";
    errorMessage.innerHTML = "Message is required";
    return false;
  } else if (contactMessage.value.length < 30) {
    errorMessage.style.color = "red";
    errorMessage.innerHTML = "The message must be more than 30 characters long";
    return false;
  } else if (contactMessage.value.length > 30) {
    errorMessage.innerHTML = "";
    return true;
  } else {
    return true;
  }
}
// Validate Form
