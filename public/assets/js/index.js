// Criação de variáveis
const menuTrigger = document.getElementById("menu-trigger");
const menu = document.getElementById("menu");
const scrollTop = document.getElementById("scroll-to-top");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu-list a");

// Evento para o botão de "ir ao topo" aparecer.
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        scrollTop.classList.add("active");
    }else{
        scrollTop.classList.remove("active");
    }
});

// Evento do menu para telas menores aparecer
menuTrigger.addEventListener("click", function(){
    if(menuTrigger.classList.contains("clicked")){
        menuTrigger.classList.remove("clicked");
        menu.classList.remove("active");    
    }else{
        menuTrigger.classList.add("clicked");
        menu.classList.add("active");
    }
});

// Observador para seções
const observer = new IntersectionObserver((entries) => {
    console.log("Oi");
    entries.forEach(entry => {
        if (entry.isIntersecting){
            const id = entry.target.getAttribute("id");
            navLinks.forEach(link =>{
                link.classList.remove("active");

                if(link.getAttribute("href") === `#${id}`){
                    link.classList.add("active");
                }
            });
        }
    });
}, {
    threshold: 0.6
});

sections.forEach(section =>{
    observer.observe(section);
});