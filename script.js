document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = event.target[0].value;
    const email = event.target[1].value;
    const message = event.target[2].value;

    // Here you can handle the form submission, e.g., send it to a server
    console.log('Form submitted:', { name, email, message });

    // Clear the form
    event.target.reset();

    // Optionally, show a success message
    alert('Thank you for your message, ' + name + '! I will get back to you soon.');
});