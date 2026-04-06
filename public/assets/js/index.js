const menuTrigger = document.getElementById("menu-trigger");
const menu = document.getElementById("menu");
const link1 = document.getElementById("link-1");
const link2 = document.getElementById("link-2");
const link3 = document.getElementById("link-3");
const scrollTop = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        scrollTop.classList.add("active");
    }else{
        scrollTop.classList.remove("active");
    }
});

menuTrigger.addEventListener("click", function(){
    if(menuTrigger.classList.contains("clicked")){
        menuTrigger.classList.remove("clicked");
        menu.classList.remove("active");    
    }else{
        menuTrigger.classList.add("clicked");
        menu.classList.add("active");
    }
});

link1.addEventListener("click", function(){
        link1.classList.add("active");
        link2.classList.remove("active");    
        link3.classList.remove("active");    
});

link2.addEventListener("click", function(){
        link2.classList.add("active");
        link1.classList.remove("active");    
        link3.classList.remove("active");    
});

link3.addEventListener("click", function(){
        link3.classList.add("active");
        link2.classList.remove("active");    
        link1.classList.remove("active");    
});
