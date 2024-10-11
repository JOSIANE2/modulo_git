const form = document.getElementById('form-numero');
const num1= document.getElementById('primeiro-numero');
const num2= document.getElementById('segundo-numero');

let formEValido = false;

function numeroValido(num1, num2){
    return num2 > num1 ;
    
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    const messageSucess = `Formulario enviado com sucesso! Verificando: <b> ${num1.value} menor que ${num2.value}</b>`;
    formEValido= numeroValido(parseInt(num1.value), parseInt(num2.value));
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
     formEValido = numeroValido(parseInt(e.target.value), parseInt( num2.value));
    if (!formEValido) {    
        num1.classList.add('error');    
        document.querySelector('.error-message').style.display = 'block';
    }else{
        num1.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
    })
    
    