document.querySelectorAll(".password-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const input = toggle.parentElement.querySelector("input");
        const isVisible = input.type === "text";

        input.type = isVisible ? "password" : "text";
        toggle.textContent = isVisible ? "Show" : "Hide";
        toggle.setAttribute("aria-label", isVisible ? "Show password" : "Hide password");
        toggle.setAttribute("aria-pressed", String(!isVisible));
    });
});

const accountForm = document.querySelector("[data-account-form]");

if (accountForm) {
    const password = accountForm.querySelector("#new-password");
    const confirmation = accountForm.querySelector("#confirm-password");
    const errorMessage = accountForm.querySelector("[data-password-error]");

    const validatePasswords = () => {
        const passwordsMatch = password.value === confirmation.value;
        confirmation.setCustomValidity(passwordsMatch ? "" : "Passwords do not match.");
        errorMessage.textContent = passwordsMatch ? "" : "Passwords do not match.";
    };

    password.addEventListener("input", validatePasswords);
    confirmation.addEventListener("input", validatePasswords);
}

document.querySelectorAll(".otp-input").forEach((input) => {
    input.addEventListener("input", () => {
        input.value = input.value.replace(/\D/g, "").slice(0, 4);
    });
});

document.querySelectorAll(".auth-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        window.location.assign(form.action);
    });
});