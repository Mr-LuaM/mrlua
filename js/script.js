/*menu icon navbar*/
let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuicon.onclick = () => {
  menuicon.classList.toggle("bx-shape-triangle");
  navbar.classList.toggle("active");
};

/*scroll section active link*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 400;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*Sticky navbar*/
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 0);

  /*remove menu icon when click*/
  menuicon.classList.remove("bx-shape-triangle");
  navbar.classList.remove("active");
};

/*Initialize Swiper */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000, // set delay to 3000 ms (3 seconds)
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiper.el.addEventListener("mouseenter", function () {
  swiper.autoplay.stop();
}); // pause autoplay on mouseenter

swiper.el.addEventListener("mouseleave", function () {
  swiper.autoplay.start();
}); // resume autoplay on mouseleave

/*dark mode*/
let darkmodeicon = document.querySelector("#darkMode-icon");

darkmodeicon.onclick = () => {
  darkmodeicon.classList.toggle("bxs-moon");
  document.body.classList.toggle("dark-mode");
};
/*about*/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

/*contact form*/

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwnZbByKDAC5G9jJhN-iAvjBAcLmlOd3RvBhPWcnLsKG6kXkwR_ZCmoUAEl9y2JFjLU/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// JavaScript code for swapping photos every 3 seconds and stopping on hover
const photoContainer = document.querySelector(".photo-container");
const photoItem1 = document.querySelector(".photo-item1");
const photoItem2 = document.querySelector(".photo-item2");
const photoItem3 = document.querySelector(".photo-item3");
let intervalId;
let currentIndex = 0; // Variable to keep track of the current index in imageSources array

// Array to store the image sources
const imageSources = [
  "home-pics/me1.jpg",
  "home-pics/me2.jpg",
  "home-pics/me3.jpg",
];

// Function to swap the photos
const swapPhotos = () => {
  // Update the src attributes of the img elements
  photoItem1.src = imageSources[currentIndex];
  photoItem2.src = imageSources[(currentIndex + 1) % imageSources.length];
  photoItem3.src = imageSources[(currentIndex + 2) % imageSources.length];

  currentIndex = (currentIndex + 1) % imageSources.length; // Update current index

  // Swap the positions of photoItem1, photoItem2, and photoItem3
  photoContainer.insertBefore(photoItem3, photoItem1);
  photoContainer.insertBefore(photoItem1, photoItem2);
};

// Start swapping photos every 3 seconds
intervalId = setInterval(swapPhotos, 3000);

// Stop swapping photos on hover
photoContainer.addEventListener("mouseover", () => {
  clearInterval(intervalId);
});

// Resume swapping photos on mouseout
photoContainer.addEventListener("mouseout", () => {
  intervalId = setInterval(swapPhotos, 3000);
});

AOS.init();
