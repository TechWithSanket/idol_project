function checkStrength() {
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('feedback');
    
    let strength = 'Weak';
    let color = 'red';

    if (password.length >= 8) {
        if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()_+{}\[\]:;"'<>,.?~`-]/.test(password)) {
            strength = 'Strong';
            color = 'green';
        } else if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password)) {
            strength = 'Medium';
            color = 'orange';
        }
    }

    feedback.textContent = `Password Strength: ${strength}`;
    feedback.className = strength.toLowerCase();
}
