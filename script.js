let url = 'https://dog.ceo/api/breeds/image/random'

fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(myJson) {
   console.log(myJson);
   let dog = document.createElement('img')
   dog.src = myJson.message
   let myVar = document.querySelector('#dog')
   myVar.appendChild(dog);
});

let pics = document.querySelector('button')

function dogpics(){
let removeImage = document.querySelector('img'); 
removeImage.remove();
    fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(myJson) {
   console.log(myJson);
   let dog = document.createElement('img')
   dog.src = myJson.message
   let myVar = document.querySelector('#dog')
   myVar.appendChild(dog);
});
}

pics.addEventListener('click', dogpics);