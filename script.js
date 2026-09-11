lucide.createIcons();

const rotasPagina = {
    'inicio': 'index.html',
    'programa': '../programa/programa.html',
    'estude': '../estude/estude.html',
    'cursos': '../cursos/cursos.html',
    'campi': '../campi/campi.html',
    'informacoes': '../info/informações.html',
    'area-estudante': '../area-estudante/area-estudante.html',
};

function ir(rota) {
    document.getElementById("menu-mobile")?.classList.remove("aberto");

    if (rotasPagina[rota]) {
        window.location.href = rotasPagina[rota];
    } else {
        window.location.href = `${rota}.html`;
    }
}

document.addEventListener("click", evento => {
    const alvo = evento.target.closest("[data-rota]");
    if (alvo) {
        evento.preventDefault();
        ir(alvo.dataset.rota);
    }
});

const botaoMenu = document.getElementById("botao-menu");
const menuMobile = document.getElementById("menu-mobile");

if (botaoMenu && menuMobile) {
    botaoMenu.addEventListener("click", () => {
        const aberto = menuMobile.classList.toggle("aberto");
        botaoMenu.setAttribute("aria-expanded", String(aberto));
    });
}

document.addEventListener("keydown", evento => {
    if (evento.key === "Escape") {
        menuMobile?.classList.remove("aberto");
    }
});