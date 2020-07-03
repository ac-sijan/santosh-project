function displayNone(){
const btns = document.querySelectorAll('.fa-angle-down');
const body = document.querySelectorAll('.body');
body.forEach((item) => {
    item.style.display = 'none';
}
)
}

const btns = document.querySelectorAll('.fa-angle-down');

btns.forEach ((btn) =>{

   btn.addEventListener('click' , (e) => {
     displayNone();
      const head = btn.parentNode.parentNode;
      const bd = head.childNodes[3];
      if(bd.style.display=='block'){
        bd.style.display = 'none';
      }
      else{
        bd.style.display = 'block';
      }
      
      
   })
})