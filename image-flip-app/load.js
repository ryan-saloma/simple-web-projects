

fetch("https://placekitten.com/500/500")
.then((blob) => addImage(blob, "#flip-x"))
.catch(() => {
    const imageElement = document.createElement("img");
    imageElement.src = "img/cat1.jpg";
    const container = document.querySelector("#flip-x");
    container.appendChild(imageElement);
});

let addImage = function(blob, containerId) {
    console.log('Entered addImage');
    const imageUrl = URL.createObjectURL(blob);
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    const container = document.querySelector(containerId);
    container.appendChild(imageElement);
}
