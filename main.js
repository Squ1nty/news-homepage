let homepageArtDesignImgElement = document.querySelector(".homepageArtDesign");
let readMoreBtn = document.querySelector(".web3ReadMoreBtn");

function handleArtDesign(){
  if(window.innerWidth <= 950){
    homepageArtDesignImgElement.setAttribute("src", "./assets/images/image-web-3-mobile.jpg");
  }
  else{
    homepageArtDesignImgElement.setAttribute("src", "./assets/images/image-web-3-desktop.jpg");
  }
}

window.onload = function(){
  handleArtDesign();
}
window.addEventListener("resize", () => {
  handleArtDesign();
});

readMoreBtn.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    console.log(readMoreBtn);
    readMoreBtn.click();
  }
});