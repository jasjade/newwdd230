//get all imgs with data src attributes
const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data- src");
    if(!src) {
        return;
    }

    img.src = src;
}

//optional parapeters being set for the IntersectionalObserver
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 300px 0px"
};
//intersectionObserver(callback, options)
const imgObserver = new IntersectionObserver((entries, imgObserver) => { 
    entries.forEach(entry => {
        if(!entry.intersecting){
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});