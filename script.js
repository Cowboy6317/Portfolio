// Get the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add an event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the link from navigating to a new page
    const sectionId = link.getAttribute('href'); // Get the ID of the section to scroll to
    const section = document.querySelector(sectionId); // Get the section to scroll to
    section.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section smoothly
  });
});

// Get the contact form
const contactForm = document.querySelector('#contact form');

// Add an event listener to the form submit button
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form data
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Send the form data to a server using AJAX
const xhr = new XMLHttpRequest();
xhr.open('POST', 'send-mail.php');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({ name, email, message }));


  // Show a message to the user that the form has been submitted
  alert('Thank you for your message!');
  contactForm.reset();
});
