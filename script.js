document.getElementById('placementForm').addEventListener('submit', function(event) {
    // Client-side validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value;
    const cgpa = parseFloat(document.getElementById('cgpa').value);
    const resume = document.getElementById('resume').value;

    if (!name.match(/^[A-Za-z\s]+$/)) {
        alert('Name should contain only letters and spaces.');
        event.preventDefault();
        return;
    }

    if (!email.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        alert('Phone number should be a 10-digit number.');
        event.preventDefault();
        return;
    }

    if (cgpa < 0 || cgpa > 10) {
        alert('CGPA should be between 0 and 10.');
        event.preventDefault();
        return;
    }

    if (!resume.endsWith('.pdf')) {
        alert('Please upload your resume in PDF format.');
        event.preventDefault();
    }

    // Additional validations as needed
});
