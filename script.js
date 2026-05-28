const activePlayer = document.querySelector("#active-bandcamp-player");
const activeBuy = document.querySelector("#active-release-buy");
const releaseButtons = Array.from(document.querySelectorAll(".release-selector .release"));
const releaseSelector = document.querySelector(".release-selector");
const activePlayerSection = document.querySelector(".active-release-player");
const mobileAlbumLayout = window.matchMedia("(max-width: 768px)");
let currentReleaseButton = document.querySelector(".release-selector .release.active");

const placeActivePlayer = (button) => {
  if (!activePlayerSection || !releaseSelector) return;

  if (mobileAlbumLayout.matches && button) {
    button.insertAdjacentElement("afterend", activePlayerSection);
  } else {
    releaseSelector.insertAdjacentElement("afterend", activePlayerSection);
  }
};

const setPlayerOpen = (button) => {
  if (!activePlayer || !activeBuy || !button) return;

  const title = button.dataset.title;
  const buyUrl = button.dataset.buyUrl;
  const embedSrc = button.dataset.embedSrc;
  const embedTitle = button.dataset.embedTitle;

  releaseButtons.forEach((releaseButton) => releaseButton.classList.remove("active"));
  button.classList.add("active");
  currentReleaseButton = button;
  placeActivePlayer(button);

  activePlayer.innerHTML = `<iframe title="${embedTitle}" loading="lazy" style="border: 0; width: 100%; height: 600px;" src="${embedSrc}" seamless><a href="${buyUrl}">${title} by harvizzle</a></iframe>`;
  activeBuy.href = buyUrl;
  activePlayerSection.hidden = false;
};

const setMobileClosed = () => {
  if (!activePlayerSection || !activePlayer) return;

  releaseButtons.forEach((releaseButton) => releaseButton.classList.remove("active"));
  activePlayer.innerHTML = "";
  activePlayerSection.hidden = true;
  currentReleaseButton = null;
};

releaseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPlayerOpen(button);
  });
});

if (mobileAlbumLayout.matches) {
  setMobileClosed();
} else {
  setPlayerOpen(currentReleaseButton);
}

const handleLayoutChange = () => {
  if (mobileAlbumLayout.matches) {
    setMobileClosed();
  } else {
    setPlayerOpen(currentReleaseButton || releaseButtons[0]);
  }
};

if (mobileAlbumLayout.addEventListener) {
  mobileAlbumLayout.addEventListener("change", handleLayoutChange);
} else if (mobileAlbumLayout.addListener) {
  mobileAlbumLayout.addListener(handleLayoutChange);
}
