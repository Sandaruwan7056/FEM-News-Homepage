const openBtn=document.getElementById("btn__open");
const closeBtn=document.getElementById("btn__close");
const navContent=document.getElementById("nav__content");
const overlay=document.getElementsByClassName("nav__overlay")[0];
const media= window. matchMedia("(max-width: 700px)");




function setNav(e){
    if(e.matches){
        navContent.style.display="block"
        overlay.style.display="block"
    }
    else{
        navContent.style.display="";
        overlay.style.display="";
    }
}

setNav(media);

function openMobileNav(){
    openBtn.setAttribute("aria-expanded","true");
}
function closeMobileNav(){
    openBtn.setAttribute("aria-expanded","false");
}

media.addEventListener("change",function (e){
    setNav(e);
});
openBtn.addEventListener("click", openMobileNav);
closeBtn.addEventListener("click",closeMobileNav);

