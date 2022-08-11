import dogs from './data.js'
import Dog from './Dog.js';

const likeButton = document.getElementById("likeBtn")
const nopeButton = document.getElementById("nopeBtn")
const interfaceEl = document.getElementById("interface")



likeButton.addEventListener("click",function(){
    console.log("YES")         

});


nopeButton.addEventListener("click",function(){
    console.log(dogs[1])
});

function render(){
    const nextDog = dogs.shift()
    const currentDog = new Dog(nextDog)
    interfaceEl.innerHTML = " "
    interfaceEl.innerHTML = currentDog.getInferfaceHtml
}

render()
render()