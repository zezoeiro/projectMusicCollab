let btnLogin = document.getElementById('btnLogin');

// validation login
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



let button = document.getElementById('btn-darkMode');
let isDark = false; 

// dark mode
button.addEventListener('click', function(){

if(isDark){
button.textContent = 'White Mode';
button.classList.remove('btn-white');
button.classList.remove('btn-dark');
document.body.classList.remove('dark-mode');
}
else{
    button.textContent = 'Dark Mode';
    button.classList.remove('btn-dark');
    button.classList.add('btn-white');
    document.body.classList.add('dark-mode');
}

isDark = !isDark;
});