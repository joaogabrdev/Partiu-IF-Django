lucide.createIcons();


const botao_menu_mobile = document.querySelector(".botao-menu")
const menu_mobile = document.querySelector(".painel-mobile")

menu_mobile.style.display = 'none'

botao_menu_mobile.addEventListener("click", function() {
    if (menu_mobile.style.display == 'none') {
        menu_mobile.style.display = 'block'
    } else {
        menu_mobile.style.display = 'none'
    }
});

document.addEventListener("keydown", evento => {
    if (evento.key === "Escape") {
        if (menu_mobile.style.display == 'block') {
            menu_mobile.style.display = 'none'
        }
    }
});