const sidebar = document.querySelector(".sidebar");
const navItems = document.querySelectorAll("nav .nav-item");
const toggle = document.querySelector(".sidebar .toggle");

// toggle menu
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

//active item
navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((navItem) => {
      navItem.classList.remove("active");
    });
    navItem.classList.add("active");
  });
});
