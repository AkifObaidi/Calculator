//lets  get all 
let inp = document.querySelector("#inpt");
let btn =  document.querySelectorAll("#btn");
let last = document.querySelector("#last");
let btns =document.querySelector("#btns");

btns.addEventListener("click", e=>{
    log();
        });
//lets great functions
function all (number){
    document.querySelector("#inpt").value+=(number);
}
function log(){
    document.querySelector("#inpt").value = eval(document.querySelector("#inpt").value)
  
}
//lets great button  with for lop
for( let x = 0; x<17; x++){
    btn[x].addEventListener("click", e=>{
        let inputnow = document.querySelector("#inpt");
        inputnow.value += btn[x].innerHTML;
    });
}

//set all
//now let do codeng for seting if +and -and*and-[lets dooooooooo]:
    

   //now do ....
  