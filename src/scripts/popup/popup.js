function popupCloseIconClick() {
    document.querySelector(".popup").style.display = "none";
}

document.querySelector(".popup-close i").addEventListener("click", popupCloseIconClick);