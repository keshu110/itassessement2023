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
  