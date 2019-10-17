let pleaseWork = document.getElementById("message")
console.log("Did it work", pleaseWork)

const keyUpClick = (event) => {
    console.log("Are you working", event)
}
pleaseWork.addEventListener("keyup", keyUpClick)



const willWork = document.querySelectorAll("article")

console.log("This will work", willWork)

const keyUpClickArticle = () => {
  console.log("Still Working !!!", event)
  willWork.addEventListener("keyup", willWork)
}

let wrapAllKeyp =document.getElementById("wrapBox")

wrapBox.addEventListener('input', function(event) {
    wrapBox.innerText = event.target.value.split('').join('')
  })