let hamburgMenuIcon = document.querySelector(".hamburgerMenuSVG");
let hamburgMenuIconContainer = document.querySelector(".hamburgerMenuIconContainer")
let closingMenuIcon = document.querySelector(".closingMenuSVG");
let closingMenuIconContainer = document.querySelector(".closingMenuIconContainer");

let navBarComponent = document.querySelector("nav");
let navBarLiList = document.querySelectorAll(".navbarAnchorTag");
let navBarLastLi = navBarLiList[navBarLiList.length - 1];

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
  if(window.innerWidth <= 768){
    handleNavbarFocusTrap();
  }
}
window.addEventListener("resize", (e) => {
  handleNavbarInert();
  if(window.innerWidth <= 768){
    handleNavbarFocusTrap();
  }
});

function handleOpenNav(e){
  navBarComponent.removeAttribute("inert");
  navBarComponent.style.left = "60%";

  hamburgMenuIconContainer.setAttribute("inert", true);

  closingMenuIconContainer.style.opacity = "100%";
  closingMenuIconContainer.removeAttribute("inert");
  closingMenuIconContainer.focus();
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
}
closingMenuIconContainer.addEventListener("click", (e) => {
  handleCloseNav(e);
});
closingMenuIconContainer.addEventListener("keydown", (e) => {
  if(e.key === "Enter" || e.key === " "){
    handleCloseNav(e);
  }
});