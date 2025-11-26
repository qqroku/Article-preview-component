const shareBtn = document.getElementById("share_btn");
const sharePopup = document.getElementById("share_popup");

shareBtn.addEventListener("click", () => {
  sharePopup.classList.toggle("active");
});
