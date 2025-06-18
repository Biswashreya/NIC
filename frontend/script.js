document.addEventListener('DOMContentLoaded', function() {
    // Toggle between login and signup forms
    const loginToggle = document.getElementById('login-toggle');
    const signupToggle = document.getElementById('signup-toggle');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    loginToggle.addEventListener('click', function() {
        this.classList.add('active');
        signupToggle.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    });
    
    signupToggle.addEventListener('click', function() {
        this.classList.add('active');
        loginToggle.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    });
    
    // Form validation and submission
    const loginFormElement = document.getElementById('loginForm');
    const registerFormElement = document.getElementById('registerForm');
    
    if (loginFormElement) {
        loginFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the data to your server
            console.log('Login submitted:', { email, password });
            
            // Redirect to welcome page after successful login
            window.location.href = 'welcome.html';
        });
    }
    
    if (registerFormElement) {
        registerFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            const fullName = document.getElementById('full-name').value;
            const email = document.getElementById('email').value;
            const mobile = document.getElementById('mobile').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const aadhaar = document.getElementById('aadhaar').value;
            const terms = document.getElementById('terms').checked;
            
            // Basic validation
            if (!fullName || !email || !mobile || !password || !confirmPassword) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            if (!terms) {
                alert('You must agree to the terms and conditions');
                return;
            }
            
            // Validate email format
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Validate mobile number (Indian format)
            if (!validateMobile(mobile)) {
                alert('Please enter a valid 10-digit mobile number');
                return;
            }
            
            // Validate Aadhaar if provided (12 digits)
            if (aadhaar && !validateAadhaar(aadhaar)) {
                alert('Please enter a valid 12-digit Aadhaar number');
                return;
            }
            
            // Here you would typically send the data to your server
            const userData = {
                fullName,
                email,
                mobile,
                password,
                aadhaar: aadhaar || null
            };
            
            console.log('Registration submitted:', userData);
            alert('Registration successful! Please login with your credentials.');
            
            // Switch to login form after successful registration
            loginToggle.click();
            registerFormElement.reset();
        });
    }
    
    // Mobile number input formatting
    const mobileInput = document.getElementById('mobile');
    if (mobileInput) {
        mobileInput.addEventListener('input', function(e) {
            this.value = this.value.replace(/\D/g, '').slice(0, 10);
        });
    }
    
    // Aadhaar number input formatting
    const aadhaarInput = document.getElementById('aadhaar');
    if (aadhaarInput) {
        aadhaarInput.addEventListener('input', function(e) {
            this.value = this.value.replace(/\D/g, '').slice(0, 12);
        });
    }
});

// Toggle password visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const icon = input.nextElementSibling;
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.textContent = '👁️‍🗨️';
    } else {
        input.type = 'password';
        icon.textContent = '👁️';
    }
}

// Validation functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateMobile(mobile) {
    return /^\d{10}$/.test(mobile);
}

function validateAadhaar(aadhaar) {
    return /^\d{12}$/.test(aadhaar);
}