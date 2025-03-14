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
  //   items[0].transform = 'rotate(234deg) translate(150px) rotate(-234deg) translate(-50%, -50%)'
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
  if (type === "prev") {
    imageHidden.src = items[items.length - 1].src;
    // imageHidden.style.opacity = 1;
  } else if (type === "next") {
    imageHidden.src = items[1].src;
    // imageHidden.style.opacity = 1;
  }

  imageDisplay.classList.add("display-image-animation");
  imageHidden.classList.add("hidden-image-animation");
  setTimeout(() => {
    imageDisplay.classList.remove("display-image-animation");
    imageHidden.classList.remove("hidden-image-animation");
  }, 500);
  
}

updateMainImage();
