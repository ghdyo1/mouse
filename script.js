let mouses = document.querySelector(".mouses");
let cloneBtn = document.querySelector("#clone");
let mouseCount = 1;
let mouseCreateCount = 1;
let mouseNeeded = 1;
let createdImg = null;

function clone(){
    mouseCreateCount = mouseNeeded;
    while(mouseCreateCount != 0){
        createdImg = document.createElement("img");
        createdImg.src = "mysh.jpg";
        mouses.appendChild(createdImg);
        mouseCount = mouseCount + 1;
        mouseCreateCount = mouseCreateCount - 1;
    }
    mouseNeeded = mouseNeeded * 2;
}

cloneBtn.addEventListener("click", clone);