const dismissButton = document.querySelector("#dismiss-button");
const successForm = document.querySelector("#success-card"); 

dismissButton.addEventListener("click", () => {
  successForm.classList.add("not-visible");
});