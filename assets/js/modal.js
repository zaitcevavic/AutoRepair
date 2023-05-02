const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const buttons = document.querySelectorAll("#open");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.toggle("show-modal");
  });
  closeButton.addEventListener('click', () => {
    modal.classList.remove("show-modal");
  })
});

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
modalTrigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);