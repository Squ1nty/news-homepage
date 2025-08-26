let hamburgMenuIcon = document.querySelector(".hamburgerMenuSVG");
let hamburgMenuIconContainer = document.querySelector(".hamburgerMenuIconContainer")
let closingMenuIcon = document.querySelector(".closingMenuSVG");
let closingMenuIconContainer = document.querySelector(".closingMenuIconContainer");

let navBarComponent = document.querySelector("nav");
let navBarLiList = document.querySelectorAll(".navbarAnchorTag");
let navBarLastLi = navBarLiList[navBarLiList.length - 1];

let navbarBlur = document.querySelector(".navbarblur");

function handleNavbarInert(){
  if(window.innerWidth <= 768){
    navBarComponent.setAttribute("inert", true);
  }
  else{
    navBarComponent.removeAttribute("inert");
  }
}
function handleNavbarFocusTrap(){
  navBarLastLi.addEventListener("keydown", (e) => {
    /* 
      For future reference, make sure to add a preventDefault() 
      when working with "Tab" so that tabbing doesn't just 
      send a user to the next node in the accessibility tree
    */
    e.preventDefault();
    if(e.key === "Tab"){
      closingMenuIconContainer.focus();
    }
  });
}
window.onload = () => {
  handleNavbarInert();
}
window.addEventListener("resize", (e) => {
  handleNavbarInert();
});

function handleOpenNav(e){
  navBarComponent.removeAttribute("inert");
  navBarComponent.style.left = "33%";

  handleNavbarFocusTrap();

  hamburgMenuIconContainer.setAttribute("inert", true);

  closingMenuIconContainer.style.opacity = "100%";
  closingMenuIconContainer.removeAttribute("inert");
  closingMenuIconContainer.focus();

  navbarBlur.classList.add("active");
}
hamburgMenuIconContainer.addEventListener("click", (e) => {
  handleOpenNav(e);
});
hamburgMenuIconContainer.addEventListener("keydown", (e) => {
  if(e.key === "Enter" || e.key === " "){
    handleOpenNav(e);
  }
});

function handleCloseNav(e){
  navBarComponent.setAttribute("inert", true);
  navBarComponent.style.left = "100%";

  hamburgMenuIconContainer.removeAttribute("inert");

  closingMenuIconContainer.style.opacity = "0";
  closingMenuIconContainer.setAttribute("inert", true);

  hamburgMenuIconContainer.focus();
  navbarBlur.classList.remove("active");
}
closingMenuIconContainer.addEventListener("click", (e) => {
  handleCloseNav(e);
});
closingMenuIconContainer.addEventListener("keydown", (e) => {
  if(e.key === "Enter" || e.key === " "){
    handleCloseNav(e);
  }
});