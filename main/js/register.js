let btnRegister = document.getElementById('btnCad');

btnRegister.addEventListener('click', function(){

let userRegister = document.getElementById('cadEmail').value
let passwordRegister = document.getElementById('cadSenha').value

if(userRegister === '' || passwordRegister === ''){
    alert('fill in all fields');
} else{
    localStorage.setItem('cadEmail', userRegister);
    localStorage.setItem('cadSenha', passwordRegister);
    alert('Registration successful!');
    window.location.href = 'login.html'
}
});

