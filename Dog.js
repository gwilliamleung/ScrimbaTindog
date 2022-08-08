class Dog{
    constructor(data){
        Object.assign(this,data)
    }
    getInferfaceHtml(){
        const{name,avatar,age,bio,hasBeenSwiped,hasBeenLiked} = this;
            return `           
                <div id="bio" class="container">
                    <h1 id="name">${name}, ${age}</h1>
                    <h2>${bio}</h2>
                </div>
                <div id="buttons" class="container">
                    <button id="nopeBtn"><img src="images/icon-cross.png"></button>
                    <button id="likeBtn"><img src="images/icon-heart.png"></button>
                </div>`
     
    }
}

export default Dog