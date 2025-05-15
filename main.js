const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');
const numero = document.getElementById('numero');


numero.addEventListener('submit', function(e) {
    e.preventDefault();
    const mensagemSucesso = `O número: <b>${numeroB.value}<b/> é maior que o número: <b>${numeroA.value}<b/>`;
    


    if (numeroB.value > numeroA.value){
        const containerMensagemSucesso = document.querySelector('.success-message');
        document.querySelector('.success-message').innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none'
        numeroB.classList.remove('error')

        numeroA.value = '';
        numeroB.value = '';
    } else {
        document.querySelector('.error-message').style.display = 'block'
        numeroB.classList.add('error')
    }
})