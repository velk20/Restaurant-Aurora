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
    /*The closest() method searches up the DOM tree for the closest element which matches a specified CSS selector. It starts at the element itself, then tests the parent, grandparent, and so on until a match is found. If a match is not found, this method returns null. */
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
  /*object which will be passed to event handlers. */
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

/*FORM VALIDATION */
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

  var z = document.forms["myForm"]["phone"].value;
  if (!z.match(/^\d+/)) {
    alert(
      "Please only enter numeric characters only for your Phone number! (Allowed input:0-9)"
    );
    return false;
  }

  var re = /^\S+@\S+\.\S+$/;
  var y = document.forms["myForm"]["email"].value;
  if (!y.match(re)) {
    alert("Please enter valid email address");
    return false;
  }
}

/*ANIMATION ON SCROLL */
window.addEventListener("load", function () {
  AOS.init();
});
