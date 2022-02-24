function jumpWall() {
  
var css = '.tp-modal-open {overflow: scroll !important}', style = document.createElement('style');
    document.body.appendChild(style);
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));

document.querySelector('.tp-modal').style.display = 'none';
document.querySelector('.tp-backdrop').style.display = 'none'; 
}

jumpWall();


