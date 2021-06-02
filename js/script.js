/*for the nav bar toggle */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
  navToggler.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
}
/*close nav when click on item */
document.addEventListener("click", function (e) {
  if (e.target.closest(".nav-item")) {
    toggleNav();
  }
});

/*sticky header - when we scroll down*/
window.addEventListener("scroll", function () {
  if (this.pageYOffset > 60) {
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector(".header").classList.remove("sticky");
  }
});

/*MENU TABS */
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("menu-tab-item") &&
    !e.target.classList.contains("active")
  ) {
    const target = e.target.getAttribute("data-target"); /*a little bootstrap */
    /*when we click ot a tab it will take the ID of the tab */
    menuTabs.querySelector(".active").classList.remove("active");
    /*remove active class from the tabs that is not active */
    e.target.classList.add("active");
    /*then add it to the target("the selected tab") */
    const menuSection = document.querySelector(".menu-section");
    menuSection
      .querySelector(".menu-tab-content.active")
      .classList.remove("active");
    /*from the menu section we remove the items that are not equal to the same tab */
    menuSection.querySelector(target).classList.add("active");
    /*then we add it to the items that are form this menu */

    AOS.init();
  }
});

/*ANIMATION ON SCROLL */
window.addEventListener("load", function () {
  AOS.init();
});
