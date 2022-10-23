


let typing =document.querySelector("#typing");
let clone =document.querySelector("#clone");

typing.addEventListener("keyup",(event)=>{
    clone.innerHTML=typing.value;
});

// typing.addEventListener("keyup",(event)=>{
//     if(event.key=='b'){
//         document.body.style="background:yellow";
//     }
// });