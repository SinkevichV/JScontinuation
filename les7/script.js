const dataItems = `[
    {
        "name": "ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "52.00",
        "img":  "img/item1.svg"
    },
    {
        "name": "ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "52.00",
        "img":  "img/item2.svg" 
    },
    {
        "name": "ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "52.00",
        "img":  "img/item3.svg" 
    },
    {
        "name": "ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "52.00",
        "img":  "img/item4.svg" 
    },
    {
        "name": "ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "52.00",
        "img":  "img/item5.svg" 
    },
    {
        "name": "ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "52.00",
        "img":  "img/item6.svg" 
    }]`;

const data = JSON.parse(dataItems);
let blockItems = document.querySelector(".block_items");
let blockCartItems = document.querySelector(".cart_items");

data.forEach((element) => {
  const itemEl = document.createElement("div");
  itemEl.classList.add("item");

  const itemImg = document.createElement("img");
  itemImg.src = element.img;

  const itemButtonAdd = document.createElement("div");
  itemButtonAdd.classList.add("buttonAdd");

  const imgAdd = document.createElement("img");
  imgAdd.src = "./img/Vector.svg";

  const elemTextAdd = document.createElement("p");
  elemTextAdd.textContent = "Add to Cart";
  elemTextAdd.style.paddingLeft = "10px";
  elemTextAdd.style.color = "white";

  const itemTitle = document.createElement("p");
  itemTitle.classList.add("title");
  itemTitle.textContent = element.name;

  const itemDescription = document.createElement("p");
  itemDescription.classList.add("description");
  itemDescription.textContent = element.description;

  const itemPrice = document.createElement("p");
  itemPrice.classList.add("price");
  itemPrice.textContent = `$ ${element.price}`;

  const itemCart = document.createElement("div");
  itemCart.classList.add("item_cart");

  const itemImgCart = document.createElement("img");
  itemImgCart.classList.add("img_cart");
  itemImgCart.src = element.img;

  const infoCart = document.createElement("div");
  infoCart.classList.add("cart_info");

  const itemTitleCart = document.createElement("p");
  itemTitleCart.classList.add("title_cart");
  itemTitleCart.textContent = element.name;

  const itemDescriptionCart = document.createElement("p");
  itemDescriptionCart.classList.add("description_cart");
  itemDescriptionCart.textContent = element.description;

  const itemPriceCart = document.createElement("p");
  itemPriceCart.classList.add("price_cart");
  itemPriceCart.textContent = `Price: $ ${element.price}`;

  const itemQuantity = document.createElement("p");
  itemQuantity.classList.add("quantity_cart");
  itemQuantity.textContent = "Quantity: ";

  const itemQuantityInp = document.createElement("input");
  itemQuantityInp.classList.add("quantityInp");
  itemQuantityInp.setAttribute("value", 1);

  const itemImgClose = document.createElement("img");
  itemImgClose.classList.add("close");
  itemImgClose.src = "./img/Vector2.svg";

  itemEl.addEventListener("mouseover", (e) => {
    itemImg.classList.add("select");
    itemButtonAdd.style.display = "flex";
  });

  itemEl.addEventListener("mouseout", (e) => {
    itemImg.classList.remove("select");
    itemButtonAdd.style.display = "none";
  });

  itemButtonAdd.addEventListener("click", (e) => {
    blockCartItems.style.display = "flex";
    blockCartItems.appendChild(itemCart);
    itemCart.appendChild(itemImgCart);
    itemCart.appendChild(infoCart);
    infoCart.appendChild(itemTitleCart);
    infoCart.appendChild(itemDescriptionCart);
    infoCart.appendChild(itemPriceCart);
    infoCart.appendChild(itemQuantity);
    infoCart.appendChild(itemQuantityInp);
    itemCart.appendChild(itemImgClose);
  });

  itemImgClose.addEventListener("click", (e) => {
    itemCart.remove();
    if (blockCartItems.childElementCount == 1) {
      blockCartItems.style.display = "none";
    }
  });

  blockItems.appendChild(itemEl);
  itemEl.appendChild(itemImg);
  itemEl.appendChild(itemTitle);
  itemEl.appendChild(itemDescription);
  itemEl.appendChild(itemPrice);
  itemEl.appendChild(itemButtonAdd);
  itemButtonAdd.appendChild(imgAdd);
  itemButtonAdd.appendChild(elemTextAdd);
});
