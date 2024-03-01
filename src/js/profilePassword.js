function togglePasswordVisibility(span) {
    var icon = span.querySelector('.fas');
    var input = span.parentElement.querySelector('input');
    
    if (input) {
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
            icon.style.color = 'blue';
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
            icon.style.color = "black";
        }
    }
}
