function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open"); //adds class of "open" to nal ul works like a light switch adding when clicked then unadding when its clicked again
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;