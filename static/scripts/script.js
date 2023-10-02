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
