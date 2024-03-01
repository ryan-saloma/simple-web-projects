let img1 = "https://placekitten.com/200/200";
let img2 = "https://placekitten.com/300/300";
let img3 = "https://placekitten.com/400/400";

let addImage = function (blob, containerId) {
    const imageUrl = URL.createObjectURL(blob);
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    const container = document.querySelector(containerId);
    container.appendChild(imageElement);
}

fetch(img1)
    .then(response => response.blob())
    .then((blob) => addImage(blob, "#flip-x"))
    .catch(() => {
        const imageElement = document.createElement("img");
        imageElement.src = "img/cat1.jpg";
        const container = document.querySelector("#flip-x");
        container.appendChild(imageElement);
    });

fetch(img2)
    .then(response => response.blob())
    .then((blob) => addImage(blob, "#flip-y"))
    .catch(() => {
        const imageElement = document.createElement("img");
        imageElement.src = "img/cat2.jpg";
        const container = document.querySelector("#flip-y");
        container.appendChild(imageElement);
    });

fetch(img3)
    .then(response => response.blob())
    .then((blob) => addImage(blob, "#bw"))
    .catch(() => {
        const imageElement = document.createElement("img");
        imageElement.src = "img/cat1.jpg";
        const container = document.querySelector("#bw");
        container.appendChild(imageElement);
    });
