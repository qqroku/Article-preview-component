const shareBtn = document.getElementById("share_btn");
const sharePopup = document.getElementById("share_popup");

shareBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sharePopup.classList.toggle("article-card__share-popup--active");
});

document.addEventListener("click", (e) => {
  const clickedOutside =
    !sharePopup.contains(e.target) && !shareBtn.contains(e.target);

  if (clickedOutside) {
    sharePopup.classList.remove("article-card__share-popup--active");
  }
});
