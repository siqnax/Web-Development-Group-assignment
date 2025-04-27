// Toggle Mobile Menu
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show');
  }
  
  // Save Contact Form Data to LocalStorage
  function saveForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    const formData = {
      name: name,
      email: email,
      message: message,
      date: new Date().toISOString()
    };
  
    let submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    submissions.push(formData);
    localStorage.setItem('submissions', JSON.stringify(submissions));
  
    alert('Thank you! Your message has been saved.');
  
    document.querySelector('.contact-form').reset();
  }
  