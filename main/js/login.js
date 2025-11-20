let btnLogin = document.getElementById('btnLogin');


btnLogin.addEventListener('click', function(){

let emailValueLogin = document.getElementById('loginEmail').value  
let passwordValueLogin = document.getElementById('loginPassword').value  


if(emailValueLogin === '' || passwordValueLogin === ''){
    alert('fill in all fields');
    return;
} 

let email = localStorage.getItem('cadEmail')
let password = localStorage.getItem('cadSenha')

if(emailValueLogin === email && passwordValueLogin === password){
    alert('Login successful!');
    window.location.href = 'homePage.html'
}
});