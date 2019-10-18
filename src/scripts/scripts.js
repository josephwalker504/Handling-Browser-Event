let pleaseWork = document.getElementById("message")
console.log("Did it work", pleaseWork)

let willWork = document.getElementById("boxes")
console.log("maybe", willWork)



const keyUpClick = (event) => {
  console.log(event)
  willWork.innerHTML = event.target.value
} 
for (let i =0; i< willWork.length; i++) { 
  console.log(willWork.item(i))
}
pleaseWork.addEventListener("keyup", keyUpClick) 
  




// const keyUpClickArticle = () => {
//   console.log("Still Working !!!", event)
  // willWork.addEventListener("keyup", willWork)
// }

// let wrapAllKeyp =document.getElementById("wrapBox")

// wrapBox.addEventListener('input', function(event) {
//     wrapBox.innerText = event.target.value
//   })