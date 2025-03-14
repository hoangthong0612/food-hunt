let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

prev.addEventListener("click", () => {
  let items = document.querySelectorAll(".item");
  items[0].classList.add("prev-animation");
  document.querySelector(".small__image").appendChild(items[0]);

  updateMainImage("prev");
  setTimeout(() => {
    items[0].classList.remove("prev-animation");
  }, 500);
});

next.addEventListener("click", () => {
  let items = document.querySelectorAll(".item");
  items[items.length - 1].classList.add("next-animation");
  document.querySelector(".small__image").prepend(items[items.length - 1]);
  updateMainImage("next");
  setTimeout(() => {
    items[items.length - 1].classList.remove("next-animation");
  }, 500);
});

function updateMainImage(type) {
  let items = document.querySelectorAll(".item");
  let imageDisplay = document.querySelector(".main_images img:nth-child(1)");
  let imageHidden = document.querySelector(".main_images img:nth-child(2)");
  
  imageDisplay.src = items[0].src;
  document.documentElement.style.setProperty('--primary-color', items[0].dataset.color);
  if (type === "prev") {
    imageHidden.src = items[items.length - 1].src;
  } else if (type === "next") {
    imageHidden.src = items[1].src;
  }

  imageDisplay.classList.add("display-image-animation");
  imageHidden.classList.add("hidden-image-animation");
  setTimeout(() => {
    imageDisplay.classList.remove("display-image-animation");
    imageHidden.classList.remove("hidden-image-animation");
  }, 500);
}

updateMainImage();
