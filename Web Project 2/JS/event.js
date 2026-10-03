document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('modelRegistration');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset error messages
        document.querySelectorAll('.error-message').forEach(el => {
            el.style.display = 'none';
        });
        
        let isValid = true;
        
        // Validate full name
        const fullName = document.getElementById('fullName').value.trim();
        if (fullName === '') {
            document.getElementById('nameError').textContent = 'Full name is required';
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        } else if (fullName.length < 3) {
            document.getElementById('nameError').textContent = 'Name must be at least 3 characters';
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        }
        
        // Validate email
        const email = document.getElementById('email').value.trim();
        if (email === '') {
            document.getElementById('emailError').textContent = 'Email is required';
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        } else if (!email.includes('@') || !email.includes('.')) {
            document.getElementById('emailError').textContent = 'Please enter a valid email';
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        }
        
        // Validate birth date
        const birthDate = document.getElementById('birthDate').value;
        if (birthDate === '') {
            document.getElementById('birthDateError').textContent = 'Date of birth is required';
            document.getElementById('birthDateError').style.display = 'block';
            isValid = false;
        } else {
            const dob = new Date(birthDate);
            const today = new Date();
            const age = today.getFullYear() - dob.getFullYear();
            
            if (age < 16) {
                document.getElementById('birthDateError').textContent = 'You must be at least 16 years old';
                document.getElementById('birthDateError').style.display = 'block';
                isValid = false;
            }
        }
        
        // Validate gender
        const genderSelected = document.querySelector('input[name="gender"]:checked');
        if (!genderSelected) {
            document.getElementById('genderError').textContent = 'Please select your gender';
            document.getElementById('genderError').style.display = 'block';
            isValid = false;
        }
        
        // Validate portfolio URL if provided
        const portfolio = document.getElementById('portfolio').value.trim();
        if (portfolio !== '' && !portfolio.startsWith('http')) {
            document.getElementById('portfolioError').textContent = 'Please enter a valid URL starting with http';
            document.getElementById('portfolioError').style.display = 'block';
            isValid = false;
        }
        
        // Validate terms checkbox
        const termsChecked = document.getElementById('terms').checked;
        if (!termsChecked) {
            document.getElementById('termsError').textContent = 'You must agree to the terms and conditions';
            document.getElementById('termsError').style.display = 'block';
            isValid = false;
        }
        
        // If form is valid, submit it
        if (isValid) {
            alert('Thank you for your application! We will review your information and contact you soon.');
            form.reset();
        }
    });
});