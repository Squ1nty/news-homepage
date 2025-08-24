let hamburgMenuIcon = document.querySelector(".hamburgerMenuSVG");
let hamburgMenuIconContainer = document.querySelector(".hamburgerMenuIconContainer")
let closingMenuIcon = document.querySelector(".closingMenuSVG");
let closingMenuIconContainer = document.querySelector(".closingMenuIconContainer");

let navBarComponent = document.querySelector("nav");

if(window.innerWidth <= 768){
  window.onload = function(){
    navBarComponent.setAttribute("inert", true);
  }
}

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