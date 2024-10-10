const form = document.getElementById('form-numero');
const num1= parseInt(document.getElementById('primeiro-numero').value);
const num2= parseInt(document.getElementById('segundo-numero').value);

let formEValido = false;

function numeroValido(num1, num2){
    return num2 > num1 ;
    
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const messageSucess = `Formulario enviado com sucesso! Verificando: <b> ${num1} menor que ${num2}</b>`;
    formEValido= numeroValido(num1.value)
    if(formEValido){
        const containermensageSucess= document.querySelector('.success-message');
        containermensageSucess.innerHTML= messageSucess;
        containermensageSucess.style.display= 'block';

        num1.value= '';
        num2.value= '';

    }else{
        document.querySelector('.error-message').style.display= 'block';
    }
    })
        num1.addEventListener('keyup',function(e){
        console.log(e.target.value);
        formEValido = numeroValido(e.target.value);
        if (!formEValido) {    
            num1.classList.add('error');    
            document.querySelector('.error-message').style.display = 'block';
    }else{
        num1.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
    })
    
    
