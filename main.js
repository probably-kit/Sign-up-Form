document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  form.onsubmit = () => validateForm();

  const validateForm = () => {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    const passwordLabel = document.getElementById("password-label");
    const errorMessageText = "PASSWORDS DO NOT MATCH";

    if (password !== confirmPassword) {
      // alert("Passwords do not match");
      passwordLabel.textContent = errorMessageText;
      
      return false;
    }

    // Additional password validation logic can be added here if needed

    return true; // Submit the form if passwords match
  }
})