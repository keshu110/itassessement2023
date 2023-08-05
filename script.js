function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
  
    // Basic form validation
    if (name.trim() === "") {
      alert("Please enter your name.");
      return false;
    }
  
    if (email.trim() === "") {
      alert("Please enter your email.");
      return false;
    }
  
    if (message.trim() === "") {
      alert("Please enter your message.");
      return false;
    }
  
    // Additional email validation (optional)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    return true; // Form is valid and can be submitted
  }
  
// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show or hide the "Scroll to Top" button based on the user's scroll position
function handleScroll() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
}

// Add event listener to handle scroll
window.addEventListener('scroll', handleScroll);
