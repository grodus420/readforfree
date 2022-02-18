function jumpWall() {
  let spans = document.getElementsByTagName("span");
  
  if (spans.innerHTML === ("ad blocker")) {
    let card = spans.closest(".checkout .view-show");
    card.setAttribute("style", "display: none !important;");
  }
}

jumpWall();


    
