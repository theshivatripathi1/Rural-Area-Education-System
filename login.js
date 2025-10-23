const signUpButton = document.getElementById('register');
const signInButton = document.getElementById('login');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('active');
});

function handleLoginSuccess() {
    window.location.href = "thankyou.html";
}