function toggleAuthModal() {
    const container = document.getElementById('container');
    const overlay = document.querySelector('.modal-overlay');
    
    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // Add fade-in animation
        container.style.opacity = '0';
        overlay.style.opacity = '0';
        setTimeout(() => {
            container.style.opacity = '1';
            overlay.style.opacity = '1';
        }, 50);
    } else {
        container.style.opacity = '0';
        overlay.style.opacity = '0';
        setTimeout(() => {
            container.style.display = 'none';
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Close modal when clicking outside
document.querySelector('.modal-overlay').addEventListener('click', function() {
    toggleAuthModal();
});

// Toggle between sign up and sign in
document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('register');
    const signInButton = document.getElementById('login');
    const container = document.getElementById('container');

    if (signUpButton && signInButton) {
        signUpButton.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.add('active');
        });

        signInButton.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.remove('active');
        });
    }
});