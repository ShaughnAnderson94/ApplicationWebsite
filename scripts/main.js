let HobbyHideB=document.querySelector("#hideHobby");
let HobbyNav =document.querySelector("#navHobby");
let MeHideB=document.querySelector("#hideMe");
let MeNav =document.querySelector("#navMe");
let GalleryHideB=document.querySelector("#hideGallery");
let GalleryNav =document.querySelector("#navGallery");
let MovieHideB=document.querySelector("#hideMovie");
let MovieNav =document.querySelector("#navMovie");
let GameHideB=document.querySelector("#hideGame");
let GameNav =document.querySelector("#navGame");
let AppHideB=document.querySelector("#hideApp");
let AppNav =document.querySelector("#navApp");
function hideSection (toHide){
Hide=document.querySelector(toHide);
Hide.style.display ="none";
}
function showSection(toShow){
 Show=document.querySelector(toShow);
 Show.style.display = "flex";   
}
MeNav.addEventListener("click",function(){
    showSection(".me-flex-container");
}
);
MeHideB.onclick = () => {
    
    hideSection(".me-flex-container");
}


HobbyNav.addEventListener("click",function(){
    showSection(".hobby-flex-container");
}
);
HobbyHideB.onclick = () => {
    /*Hobyinfo.style.display = "none";*/
    hideSection(".hobby-flex-container");

}
GalleryNav.addEventListener("click",function(){
    showSection(".gallery-flex-container");
}
);
GalleryHideB.onclick = () => {
    
    hideSection(".gallery-flex-container");

}
MovieNav.addEventListener("click",function(){
    showSection(".movie-flex-container");
}
);
MovieHideB.onclick = () => {
    
    hideSection(".movie-flex-container");

}

GameNav.addEventListener("click",function(){
    showSection(".game-flex-container");
}
);
GameHideB.onclick = () => {
    
    hideSection(".game-flex-container");

}

AppNav.addEventListener("click",function(){
    showSection(".app-flex-container");
}
);
AppHideB.onclick = () => {
    
    hideSection(".app-flex-container");

}