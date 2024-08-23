function validateForm() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.getElementById("gender").value;
    const agree = document.getElementById("agree").checked;
    
    const nameError = document.getElementById("name-error");
    const phoneError = document.getElementById("phone-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const genderError = document.getElementById("gender-error");
    const agreeError = document.getElementById("agree-error");

    nameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    genderError.textContent = "";
    agreeError.textContent = "";

    let isValid = true;

    if (name === "" || name === Number) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    if (phone === "" || phone == String) {
        phoneError.textContent =
            "Please enter your address.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    if (gender === "") {
        genderError.textContent =
            "Please select your gender.";
        isValid = false;
    }

    if (!agree) {
        agreeError.textContent =
            "Check this box to agree  ";
        isValid = false;
    }

    return isValid;
}
