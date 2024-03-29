"use strict";

// // Loading Page
    // Set a minimum time for the loading page (3 seconds)
    var minTime = 5000;

    // Function to hide the loading element
    function hideLoading() {
      var loadingElement = document.querySelector('.pre-loader');
      loadingElement.style.display = 'none';

      // Scroll to the top of the page
      window.scrollTo(0, 0);
    }

    // Wait for the entire page and its resources to be fully loaded
    window.onload = function() {
      // Calculate the time remaining to meet the minimum time requirement
      var currentTime = new Date().getTime();
      var timeElapsed = currentTime - startTime;

      // Calculate the remaining time to wait
      var remainingTime = Math.max(0, minTime - timeElapsed);

      // Wait for the remaining time before hiding the loading element
      setTimeout(hideLoading, remainingTime);
    };

    // Record the start time when the script is executed
    var startTime = new Date().getTime();

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const sidebarMenu = document.querySelector("#sidebar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
    sidebarMenu.classList.add("sidebar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
    sidebarMenu.classList.remove("sidebar--dark");
  }
});

// Handle scrolling when tapping on the sidebar menu
sidebarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  sidebarContainer.classList.toggle("open");
  sidebarMenu.classList.toggle("open");
  navbarMenu.classList.toggle("open");
  homeSec.classList.toggle("open");
  aboutSec.classList.toggle("open");
  skillsSec.classList.toggle("open");
  skills2Sec.classList.toggle("open");
  workSec.classList.toggle("open");
  testimonialsSec.classList.toggle("open");
  contactSec.classList.toggle("open");
  scrollIntoView(link);
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  sidebarContainer.classList.remove("open");
  sidebarMenu.classList.remove("open");
  navbarMenu.classList.remove("open");
  homeSec.classList.remove("open");
  aboutSec.classList.remove("open");
  skillsSec.classList.remove("open");
  skills2Sec.classList.remove("open");
  workSec.classList.remove("open");
  testimonialsSec.classList.remove("open");
  contactSec.classList.remove("open");
  scrollIntoView(link);
});

// Handle scrolling when tapping on the logo
const homebtn = document.querySelector(".navbar__logo");
homebtn.addEventListener("click", (e) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  // refreshing the page
  window.location.replace(
    window.location.pathname + window.location.search + window.location.hash
  );

  // going back to the top
  // scrollIntoView(link);
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // Remove selection from the previous item and select the new one
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");
  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// changes the diplay when toggle button is clicked
const homeSec = document.querySelector("#home");
const aboutSec = document.querySelector("#about");
const skillsSec = document.querySelector("#skills");
const skills2Sec = document.querySelector("#skill2");
const workSec = document.querySelector("#work");
const testimonialsSec = document.querySelector("#testimonials");
const contactSec = document.querySelector("#contact");
const sidebarContainer = document.querySelector("#sidebar__container");
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  sidebarContainer.classList.toggle("open");
  sidebarMenu.classList.toggle("open");
  navbarMenu.classList.toggle("open");
  homeSec.classList.toggle("open");
  aboutSec.classList.toggle("open");
  skillsSec.classList.toggle("open");
  skills2Sec.classList.toggle("open");
  workSec.classList.toggle("open");
  testimonialsSec.classList.toggle("open");
  contactSec.classList.toggle("open");
});

// Image Slideshow
const slideshowImages = document.querySelectorAll(".banner .slideshow-img");
const nextImageDelay = 5000;
let currentImageCounter = 0;
slideshowImages[currentImageCounter].style.opacity = 1;
slideshowImages[currentImageCounter].style.zIndex = 3;
setInterval(nextImage, nextImageDelay);

function nextImage() {
  const tempCounter = currentImageCounter;
  setTimeout(() => {
    slideshowImages[tempCounter].style.opacity = 0;
    slideshowImages[tempCounter].style.zIndex = 1;
  }, 100);
  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.opacity = 1;
  slideshowImages[currentImageCounter].style.zIndex = 3;
}

var controller = new ScrollMagic.Controller();
// Profile picture movement
var about_tween_profile = TweenMax.fromTo(
  ".profile",
  1,
  {
    y: "50%",
  },
  {
    y: "0%",
  }
);
var aboutProfilescene = new ScrollMagic.Scene({
  triggerElement: "#about",
  duration: "100%",
  offset: "-200%",
})
  .setTween(about_tween_profile)
  .addTo(controller);

// work text movement
var scene = new ScrollMagic.Scene({
  triggerElement: "#work", //트리거 설정
  triggerHook: 0.5,
})
  .setClassToggle(".section-connect__word", "visible")
  .addTo(controller);

// work ending text1 movement
var workEndingScene = new ScrollMagic.Scene({
  triggerElement: "#testimonials.section2", //트리거 설정
  triggerHook: 0.8,
})
  .setClassToggle(".section-connect__word2", "visible")
  .addTo(controller);

// work ending text2 movement
var workEndingScene2 = new ScrollMagic.Scene({
  triggerElement: "#testimonials.section2", //트리거 설정
  triggerHook: 0.6,
})
  .setClassToggle(".section-connect__word3", "visible")
  .addTo(controller);
// .addIndicators({
//   name: "1",
// });

// Testimonial Title Movement
var pr_tween_scroll = TweenMax.to(".testimonial__title__container", 2, {
  x: "-80%",
  ease: Linear.easeNone,
});
var prScrollScene = new ScrollMagic.Scene({
  triggerElement: ".section2",
  triggerHook: 0.6,
  duration: "60%",
  offset: 120,
})
  .setTween(pr_tween_scroll)
  .addTo(controller);
