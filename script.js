const activePlayer = document.querySelector("#active-bandcamp-player");
const activeBuy = document.querySelector("#active-release-buy");
const releaseButtons = Array.from(document.querySelectorAll(".release-selector .release"));
const releaseSelector = document.querySelector(".release-selector");
const activePlayerSection = document.querySelector(".active-release-player");
const mobileAlbumLayout = window.matchMedia("(max-width: 768px)");

const placeActivePlayer = (button) => {
  if (!activePlayerSection || !releaseSelector) return;

  if (mobileAlbumLayout.matches && button) {
    button.insertAdjacentElement("afterend", activePlayerSection);
  } else {
    releaseSelector.insertAdjacentElement("afterend", activePlayerSection);
  }
};

releaseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!activePlayer || !activeBuy) return;

    releaseButtons.forEach((releaseButton) => releaseButton.classList.remove("active"));
    button.classList.add("active");

    const title = button.dataset.title;
    const buyUrl = button.dataset.buyUrl;
    const embedSrc = button.dataset.embedSrc;
    const embedTitle = button.dataset.embedTitle;

    activePlayer.innerHTML = `<iframe title="${embedTitle}" loading="lazy" style="border: 0; width: 100%; height: 600px;" src="${embedSrc}" seamless><a href="${buyUrl}">${title} by harvizzle</a></iframe>`;
    activeBuy.href = buyUrl;
    placeActivePlayer(button);
  });
});

placeActivePlayer(document.querySelector(".release-selector .release.active"));

const handleLayoutChange = () => {
  placeActivePlayer(document.querySelector(".release-selector .release.active"));
};

if (mobileAlbumLayout.addEventListener) {
  mobileAlbumLayout.addEventListener("change", handleLayoutChange);
} else if (mobileAlbumLayout.addListener) {
  mobileAlbumLayout.addListener(handleLayoutChange);
}
