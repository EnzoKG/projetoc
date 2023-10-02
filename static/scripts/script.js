document.addEventListener("DOMContentLoaded", function () {
    // Seletor do vídeo
    const video = document.getElementById("video-background");
    const c = document.getElementById("main-content");

    video.addEventListener("ended", function () {
        // Oculte o vídeo
        video.style.display = "none";
        c.classList.add("fade-out");
    });

    const sections = document.querySelectorAll(".section");
    const links = document.querySelectorAll("a");
 
    links.forEach(function (link) {
       link.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);
 
          // Scroll suave para a seção de destino
          window.scrollTo({
             top: targetSection.offsetTop,
             behavior: "smooth"
          });
       });
    });
 
    // Adicionar animações ao rolar a página
    window.addEventListener("scroll", function () {
       const windowHeight = window.innerHeight;
 
       sections.forEach(function (section) {
          const sectionTop = section.getBoundingClientRect().top;
 
          if (sectionTop < windowHeight * 0.75) {
             section.style.transform = "translateY(0)";
          }
       });
    });

    // Obtém o elemento de input do número
    const numberInput = document.getElementById('number');

    // Função para formatar o número de telefone
    function formatPhoneNumber() {
        let inputValue = numberInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        let formattedPhoneNumber = '';

        if (inputValue.length > 2) {
            formattedPhoneNumber += `(${inputValue.substring(0, 2)}) `;
            inputValue = inputValue.substring(2);
        }

        if (inputValue.length > 5) {
            formattedPhoneNumber += `${inputValue.substring(0, 5)}-`;
            inputValue = inputValue.substring(5);
        }

        formattedPhoneNumber += inputValue;

        numberInput.value = formattedPhoneNumber;
    }

    // Adiciona um ouvinte de evento para chamar a função ao digitar
    numberInput.addEventListener('input', formatPhoneNumber);
 });