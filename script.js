var modal = document.querySelector('.modal-box');
var button = document.querySelector('.story');
var close = document.querySelector(".close")[0];

button.addEventListener('click', ()=>{
    modal.style.display = "block";
})


function closeModal(){
    modal.style.display = "none";
    
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}