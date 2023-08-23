const popup = document.getElementById("popup");
const buttonOpened = document.getElementById("popupOpen");
const popupOverlays = document.querySelectorAll(".popup");

function openPopup() {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeEcsPopup);
}

function closePopup(elem) {
  elem.classList.remove("popup_opened");
}

function closeEcsPopup(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

popupOverlays.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
  });
});

buttonOpened.addEventListener("click", openPopup);
