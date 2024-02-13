const emailInput = document.querySelector(".sign-up__email-input");
const emailForm = document.querySelector(".sign-up__email-form");

const handleEmailSubmit = (event) => {
  event.preventDefault();
  const input = emailInput.value;
  console.log("input", input);
  const emailPattern = /[\d\w]+@[\d\w]+\.com/;

  if (!emailPattern.test(input)) {
    console.log("error input");
    emailInput.classList.add("sign-up__email-input--error");
  } else {
    console.log("submitted");
    window.location = "success.html";
  }
};

emailForm.addEventListener("submit", handleEmailSubmit);
