import imageArray from "../../data/image.data.js";

const slider = document.getElementById("slider");
const menu = document.getElementById("menu");

function loadData() {
    console.log(imageArray);
    for (let index = 0; index < imageArray.length; index++) {
        const element = imageArray[index];
        slider.append(createSlideElement(element));
        menu.append(createMenu(element));
    }
}

function createSlideElement(slideImage) {
    const slideElement = document.createElement("li");
    slideElement.id = "slide" + slideImage.id;

    const imageSlide = document.createElement("img");
    imageSlide.src = slideImage.pathImage;

    slideElement.append(imageSlide);

    return slideElement;
}

function createMenu(slideImage) {
    const menuElement = document.createElement("li");

    const link = document.createElement("a");
    link.href = "#slide" + slideImage.id;
    // link.textContent = slideImage.id;

    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-circle');

    link.appendChild(icon);

    menuElement.append(link);

    return menuElement;
}

loadData();