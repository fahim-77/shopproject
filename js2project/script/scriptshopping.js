const tBody = document.querySelector("tbody");
const totalPrice = document.querySelector(".total-price");

function loadLocalStorage() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  for (let i in cart.item) {
    const tRow = document.createElement("tr");
    tBody.appendChild(tRow);
    tRow.classList.add("tRow");

    ////////// id //////////
    const tDataId = document.createElement("td");
    tRow.appendChild(tDataId);
    tDataId.innerHTML = cart.item[i].id;

    ////////// title //////////
    const tDataTitle = document.createElement("td");
    tRow.appendChild(tDataTitle);
    tDataTitle.innerHTML = cart.item[i].title;

    ////////// price //////////
    const tDataPrice = document.createElement("td");
    tRow.appendChild(tDataPrice);
    tDataPrice.innerHTML = cart.item[i].price;

    ////////// count //////////
    const tDataCount = document.createElement("td");
    tRow.appendChild(tDataCount);
    tDataCount.innerHTML = cart.item[i].count;

    ////////// total //////////
    const tDataTotal = document.createElement("td");
    tRow.appendChild(tDataTotal);
    tDataTotal.innerHTML = cart.item[i].total;
  }
  totalPrice.nextElementSibling.innerHTML = cart.totalPrice;
}

window.addEventListener("load", () => {
  loadLocalStorage();
});
