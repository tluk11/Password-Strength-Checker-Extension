// Add an event listener for password inputs
document.addEventListener('input', function (event) {
    if (event.target.type === 'password') {
      const password = event.target.value;
      const strength = checkPasswordStrength(password);
      
      // You could display the strength near the input field
      // Create or update a strength indicator div
      let strengthIndicator = document.getElementById('password-strength-indicator');
      
      if (!strengthIndicator) {
        strengthIndicator = document.createElement('div');
        strengthIndicator.id = 'password-strength-indicator';
        strengthIndicator.style.marginTop = '10px';
        strengthIndicator.style.fontWeight = 'bold';
        event.target.parentNode.appendChild(strengthIndicator);
      }
      
      strengthIndicator.textContent = `Strength: ${strength}`;
      strengthIndicator.style.color = getStrengthColor(strength);
    }
  });
  
  // Function to check password strength
  function checkPasswordStrength(password) {
    const regexWeak = /[a-z]/;
    const regexMedium = /[a-zA-Z0-9]/;
    const regexStrong = /[a-zA-Z0-9!@#$%^&*()_+=-]/;
  
    if (password.length < 6 || !regexWeak.test(password)) {
      return 'Weak';
    } else if (password.length >= 6 && regexMedium.test(password)) {
      return 'Medium';
    } else if (password.length >= 8 && regexStrong.test(password)) {
      return 'Strong';
    } else {
      return 'Weak';
    }
  }
  
  // Helper function to get color based on strength
  function getStrengthColor(strength) {
    switch (strength) {
      case 'Weak':
        return 'red';
      case 'Medium':
        return 'orange';
      case 'Strong':
        return 'green';
      default:
        return 'black';
    }
  }