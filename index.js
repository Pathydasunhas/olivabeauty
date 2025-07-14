document.addEventListener("DOMContentLoaded", function () {
  // todo seu código aqui

// Botão do menu hambúrguer
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu nav ul');

// Abre/fecha menu ao clicar no botão
toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Fecha o menu ao redimensionar para tela grande
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.classList.remove('active');
    }
});

// === Slider de Serviços ===
const trackServicos = document.querySelector('.slider-track');
const btnAnteriorServicos = document.querySelector('.btn.anterior');
const btnProximoServicos = document.querySelector('.btn.proximo');
let indexServico = 0;

btnProximoServicos.addEventListener('click', () => {
    const totalSlides = trackServicos.children.length;
    indexServico = (indexServico + 1) % totalSlides;
    trackServicos.style.transform = `translateX(-${indexServico * 100}%)`;
});

btnAnteriorServicos.addEventListener('click', () => {
    const totalSlides = trackServicos.children.length;
    indexServico = (indexServico - 1 + totalSlides) % totalSlides;
    trackServicos.style.transform = `translateX(-${indexServico * 100}%)`;
});

// === Slider de Depoimentos (corrigido com largura real) ===
const trackDepoimentos = document.querySelector('.slider-depoimentos-track');
const slidesDepo = document.querySelectorAll('.slide-depoimento');
const btnAnteriorDepo = document.querySelector('.btn-dep.anterior-dep');
const btnProximoDepo = document.querySelector('.btn-dep.proximo-dep');
let indexDepo = 0;

function atualizarSliderDepo() {
    const slideWidth = slidesDepo[0].clientWidth;
    trackDepoimentos.style.transform = `translateX(-${indexDepo * slideWidth}px)`;
}

btnProximoDepo.addEventListener('click', () => {
    indexDepo = (indexDepo + 1) % slidesDepo.length;
    atualizarSliderDepo();
});

btnAnteriorDepo.addEventListener('click', () => {
    indexDepo = (indexDepo - 1 + slidesDepo.length) % slidesDepo.length;
    atualizarSliderDepo();
});
});