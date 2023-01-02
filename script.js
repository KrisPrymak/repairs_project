let images = [
  {
    url: "./media/slider1.png",
  },
  {
    url: "./media/slider2.png",
  },
  {
    url: "./media/slider3.png",
  },
];

function initSlider() {
  if (!images || !images.length) return;

  let imagesBox = document.querySelector(".projects__content-box");
  let arrowPrev = document.querySelector(".projects__nav-prev");
  let arrowNext = document.querySelector(".projects__nav-next");
  let dotsBox = document.querySelector(".projects__nav-dots");
  let linkList = document.querySelector(".projects__list");

  initImages();
  initArrowNext();
  initArrowPrev();
  initDots();
  initLinks();


  function initLinks() {
    linkList.querySelectorAll(".projects__list-item").forEach((link) => {
      link.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<li class="projects__nav-dots__item n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}"></li>`;
      dotsBox.innerHTML += dot;
    });

    dotsBox.querySelectorAll(".projects__nav-dots__item").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function initImages() {
    images.forEach((image, index) => {
      let sliderImg = `<img src=${
        image.url
      } alt="project" class="sliderImage n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}" />`;
      imagesBox.innerHTML += sliderImg;
    });
  }
  

  function initArrowNext() {
    arrowNext.addEventListener("click", function () {
      let currentNum = +imagesBox.querySelector(".active").dataset.index;
      let nextNum = currentNum === images.length - 1 ? 0 : currentNum + 1;
      moveSlider(nextNum);
    });
  }

  function initArrowPrev() {
    arrowPrev.addEventListener("click", function () {
      let currentNum = +imagesBox.querySelector(".active").dataset.index;
      nextNum = currentNum === 0 ? images.length - 1 : currentNum - 1;
      moveSlider(nextNum);
    });
  }

  function moveSlider(num) {
    movePattern(imagesBox, num)
    movePattern(dotsBox, num)
    movePattern(linkList, num)
  }

  function movePattern(anything, num) {
    anything.querySelector(".active").classList.remove("active");
    anything.querySelector(".n" + num).classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", initSlider);

