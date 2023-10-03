document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video-background");
    
    // Função para obter parâmetros da URL por nome
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Verifica se o parâmetro de sucesso está presente na URL
    var successParam = getParameterByName('success');

    if (successParam === '1') {
        alert("Mensagem enviada com sucesso!");
        video.style.display = "none";
    }
});

