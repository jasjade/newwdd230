//imagesToLoad variable contains references to all the images
let imagesToLoad = document.querySelectorAll("img[data-src]");
//loadImages function moves the path from data-src to src
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src"); //When each image is actually loaded, we remove its data-src attribute as it's not needed anymore.
  };
};
//Then we loop through each image and load it:
imagesToLoad.forEach((img) => {
    loadImages(img);
  });