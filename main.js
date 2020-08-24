"use strict";

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
  workSec.classList.toggle("open");
  testimonialsSec.classList.toggle("open");
  contactSec.classList.toggle("open");
});

// Image Slideshow
const slideshowImages = document.querySelectorAll(".banner .slideshow-img");

const nextImageDelay = 5000;
let currentImageCounter = 0;
slideshowImages[currentImageCounter].style.opacity = 1;
slideshowImages[currentImageCounter + 1].style.zIndex = -100;
slideshowImages[currentImageCounter + 2].style.zIndex = -100;
setInterval(nextImage, nextImageDelay);
function nextImage() {
  const tempCounter = currentImageCounter;
  setTimeout(() => {
    slideshowImages[tempCounter].style.opacity = 0;
    slideshowImages[tempCounter].style.zIndex = -100;
  }, 1000);
  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.zIndex = 1;
  slideshowImages[currentImageCounter].style.opacity = 1;
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
// .addIndicators({
//   name: "1",
// });

// work text movement
var scene = new ScrollMagic.Scene({
  triggerElement: "#work", //트리거 설정
  triggerHook: 0.5,
})
  .setClassToggle(".section-connect__word", "visible")
  .addTo(controller);
// .addIndicators({
//   name: "1",
// });

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

// var testCont = document.querySelector(".testimonial__title__container");

// var isMobile = function (e) {
//   return (
//     /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
//       e
//     ) ||
//     /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
//       e.substr(0, 4)
//     )
//   );
// };

// if (isMobile) {
//   testCont.classList.add("isMobile");
// }

// var windowLoadEvt = function () {
//   isMobileSize(),
//     isMobileSize()
//       ? (testScrollScene.enabled(!1),
//         (testCont.style.transform = "translateX(0%)"))
//       : testScrollScene.enabled(!0),
//     isMobile && (testCont.style.transform = "translateX(50%)");
// };
