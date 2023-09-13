function sum(valor1,valor2){
    return valor1+valor2
}
function multiply(valor1,valor2){
    return valor1*valor2
}
function division(valor1,valor2){
    return valor1/valor2
}
function sub(valor1,valor2){
    return valor1-valor2
}
const btnresult=document.getElementById("result")
 
const btncalculadora = document.querySelectorAll("button")
let array = [1,2,3] 
array.forEach((item)=>{
    console.log(item)
})
for (let i =0;i<array.length;i++){
 console.log(array[i])
}
btncalculadora.forEach((button) =>{
    const textResult =document.querySelector(".result-text") 

    button.addEventListener("click", () =>{
        const valor1 = button.innerText
        if (textResult.innerText == "0") {
            textResult.innerText =""
        }if (button.id == "clear") {
            textResult.innerText=""
        }
        if (button.id) {
            
        }
    textResult.innerText += button.innerText
})
})
