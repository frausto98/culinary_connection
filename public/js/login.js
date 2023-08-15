// functionality  for the login page, front end

const loginBtn = document.getElementById('loginBTN');

loginBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Please enter a valid email and password');
        return;
    }

    if (email && password) {
        
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/home');
        } else {
            alert('Failed to log in');
        }
    }
});