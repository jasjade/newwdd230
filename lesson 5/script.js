const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener('click', function() {
 if (input.value.length === 0) {
    alert("please enter input");
 } else {
    let myitem = input.value;
    const listitem = document.createElement("li");
    const listtext = document.createElement("span");
    const deletebutton = document.createElement("button");
    
    listitem.appendChild(listtext);
    listtext.textContent= myitem;
    listitem.appendChild(deletebutton);
    deletebutton.textContent = "❌";

    list.appendChild(listitem);

    input.value = "";

    deletebutton.addEventListener("click", function(){
        list.removeChild(listitem);
    });

    input.focus();
    
 }
})