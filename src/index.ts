import "./styles.css";

let btnEnv=document.getElementById("btnEnviar");
let numero1=document.getElementById("numero1");
let numero2=document.getElementById("numero2");
let numero3=document.getElementById("numero3");

btnEnv.addEventListener("click",()=>{
  let dato1:number=numero1.value;
  let dato2:number=numero2.value;
  let dato3:number=numero2.value;
  if (dato1>dato2&&dato1>dato3){
    console.log("el numero" + dato1 + "es el mayor");
  } else if (dato2>dato1&&dato2>dato3){
    console.log("el numero" + dato2 + "es el mayor");
  } else {
    console.log("el numero" + dato3 + "es el mayor");
  }
})
