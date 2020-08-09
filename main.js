var box = document.querySelector(".box");

//Detect all clicks on the document

document.addEventListener("click",function(event){
    //If user click inside the element, do nothing
    if(event.target.closest(".box"))
    return;

    //If user clicks outside the element, hide it!
    box.classList.add("js-is-hidden");
})