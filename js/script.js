// Menu
let body = document.querySelector('body');
let menu = document.querySelector('.menu');
let nav = document.querySelector('.navigation');
let lines = document.querySelectorAll('.line');
let ancora = document.querySelectorAll('nav a');

let finalPage = document.querySelector('body').scrollHeight;

ancora[5].onclick = (event) => {
    event.preventDefault();
    for(let line of lines){
        line.classList.remove('line-toggle');
    }
    nav.classList.remove('navigation-toggle');
    scrollTo(0, finalPage);
}

menu.addEventListener('click', () => {
    for(let line of lines){
        line.classList.toggle('line-toggle');
    }
    nav.classList.toggle('navigation-toggle');
});
// Slide
let slideball = document.querySelectorAll(".slide .ball");
let slide = document.querySelector('.slide');
  
slideball[0].onclick = () => {
    clearInterval(slide1);
    i = 0;
    if(i == 0){
        slide.style.backgroundImage = 'url(../img/slide1.jpg)';
        slideball[0].style.backgroundColor = "#CE1B28";
        slideball[1].style.backgroundColor = "white";
        slideball[2].style.backgroundColor = "white";
    } 
}
slideball[1].onclick = () => {
    clearInterval(slide1);
    i = 1;
    if(i == 1){
        slide.style.backgroundImage = 'url(../img/slide2.jpg)'
        slideball[1].style.backgroundColor = "#CE1B28";
        slideball[0].style.backgroundColor = "white";
        slideball[2].style.backgroundColor = "white";
    } 
}
slideball[2].onclick = () => {
    clearInterval(slide1);
    i = 2;
    if(i == 2){
        slide.style.backgroundImage = 'url(../img/slide3.jpg)'
        slideball[2].style.backgroundColor = "#CE1B28";
        slideball[1].style.backgroundColor = "white";
        slideball[0].style.backgroundColor = "white";
    } 
}
slideball[0].style.backgroundColor = "#CE1B28";
let i = 0;
let slide1 = setInterval(() => {
    i++
    if(i == 0){
        slideball[0].style.backgroundColor = "#CE1B28";
        slideball[1].style.backgroundColor = "white";
        slideball[2].style.backgroundColor = "white";
        slide.style.backgroundImage = 'url(../img/slide1.jpg)'
    }
    else if(i == 1){
        slideball[0].style.backgroundColor = "white";
        slideball[1].style.backgroundColor = "#CE1B28";
        slideball[2].style.backgroundColor = "white";
        slide.style.backgroundImage = 'url(../img/slide2.jpg)'
    }
    else if(i == 2){
        slideball[0].style.backgroundColor = "white";
        slideball[1].style.backgroundColor = "white";
        slideball[2].style.backgroundColor = "#CE1B28";
        slide.style.backgroundImage = 'url(../img/slide3.jpg)'
    }
    else{
        slideball[0].style.backgroundColor = "#CE1B28";
        slideball[1].style.backgroundColor = "white";
        slideball[2].style.backgroundColor = "white";
        slide.style.backgroundImage = 'url(../img/slide1.jpg)'
    }
    if(i >= 3){
        i = 0;
    }      
}, 1750);

// Objetivos
let balls = document.querySelector('.objetivos .balls');
let ball1 = document.querySelector('.objetivos .ball:first-child');
let ball2 = document.querySelector('.objetivos .ball:last-child');
let obj1 = document.querySelector('.obj-contain1');
let obj2 = document.querySelector('.obj-contain2');

ball1.style.backgroundColor = '#CE1B28';
(function respSlide(){
    if(window.innerWidth >= 1100){
        ball1.onclick = () => {
            ball1.style.backgroundColor = '#CE1B28';
            ball2.style.backgroundColor = 'transparent';
            obj1.style.transform = "translateX(0)";
            obj2.style.transform = "translateX(100%)";
            clearInterval(slide2);
        }
        ball2.onclick = () => {
            ball2.style.backgroundColor = '#CE1B28';
            ball1.style.backgroundColor = 'transparent';
            obj1.style.transform = "translateX(-100%)";
            obj2.style.transform = "translateX(0)";
            clearInterval(slide2);
        }
        let k = 0;
        let slide2 = setInterval(() => {

            k++;
            if(k == 0){
                ball1.style.backgroundColor = '#CE1B28';
                ball2.style.backgroundColor = 'transparent';
                obj1.style.transform = "translateX(0)";
                obj2.style.transform = "translateX(100%)";
            }
            else if(k == 1){
                ball2.style.backgroundColor = '#CE1B28';
                ball1.style.backgroundColor = 'transparent';
                obj1.style.transform = "translateX(-100%)";
                obj2.style.transform = "translateX(0)";
            }
            else{
                ball1.style.backgroundColor = '#CE1B28';
                ball2.style.backgroundColor = 'transparent';
                obj1.style.transform = "translateX(0)";
                obj2.style.transform = "translateX(100%)";
            }
            if(k >= 2){
                k = 0;
            }
        }, 3500);   
    }else{
        return;
    }
}());

// Depoimentos
let elogio = document.querySelector(".depoimentos>p");

let elogio1 = "Excelente com louvor. Médico supercompetente e atencioso. Ele, sua equipe Dra. Mariana e Dr. André, agradeço a deus por ter colocado eles no meu caminho em uma hora tão difícil.";

let elogio2 = "Ele é um ser humano incrível, sempre preocupado com o paciente e sempre passando confiança e competência. Agradeço a Deus por ter me colocar nas mãos dele para ser transplantado. Meu transplante de fígado foi dia 1 de novembro e estou ótimo. Muito obrigado a você Dr. Jorge e à sua equipe sempre competente!";

let elogio3 = "Médico extremamente competente, super minucioso. Altíssimo nível técnico e atendimento dedicado. Alma abençoada. Fui salvo pelas mãos habilidosas desse cirurgião, quando fui identificado com um tumor no fígado. Recomendo, Dr. Jorge e sua equipe!";

let perfil = document.querySelector(".perfil");
let nomePaciente = document.querySelector('.perfil-name>span:first-child');

let j = 0;
let dpslide = setInterval(() => {
    j++;
    if(j == 0){
        elogio.innerHTML = elogio1;
        perfil.style.backgroundImage = "url(../img/perfil1.jpg)";
        nomePaciente.innerHTML = "José"
    }
    else if(j == 1){
        elogio.innerHTML = elogio2;
        perfil.style.backgroundImage = "url(../img/perfil2.jpg)";
        perfil.style.backgroundPosition = "top";
        nomePaciente.innerHTML = "Andressa"
    }
    else if(j == 2){
        elogio.innerHTML = elogio3;
        perfil.style.backgroundImage = "url(../img/perfil3.jpg)";
        nomePaciente.innerHTML = "Rodolfo"
    }
    else{
        elogio.innerHTML = elogio1;
        perfil.style.backgroundImage = "url(../img/perfil1.jpg)";
        nomePaciente.innerHTML = "José"
    }
    if(j >= 3){
        j = 0;
    }
}, 3500);


// Formulario
let form = document.querySelectorAll('form');
let inputText = document.querySelectorAll('.label-disable');
let campos = document.querySelectorAll('input');
let textarea = document.querySelector('textarea');
let buttonForm = document.querySelector('.btn-active');

campos[0].addEventListener('focusin', () => {
    inputText[0].classList.add('label-active');
});

campos[0].addEventListener('focusout', () => {
    if(campos[0].value.trim() == ""){
        inputText[0].classList.remove('label-active');
    }
    else{
        return
    }
});
campos[1].addEventListener('focusin', () => {
    inputText[1].classList.add('label-active');
});

campos[1].addEventListener('focusout', () => {
    if(campos[1].value.trim() == ""){
        inputText[1].classList.remove('label-active');
    }
    else{
        return
    }
});
textarea.addEventListener('focusin', () => {
    inputText[2].classList.add('label-active');
});

textarea.addEventListener('focusout', () => {
    if(textarea.value.trim() == ""){
        inputText[2].classList.remove('label-active');
    }
    else{
        return
    }
});

function enviarForm() {
    buttonForm.innerHTML = "Enviado!";
    form.submit();  
}
buttonForm.onclick = () => {
    enviarForm();
}
