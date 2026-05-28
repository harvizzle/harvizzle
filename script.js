const activePlayer = document.querySelector("#active-bandcamp-player");
const activeBuy = document.querySelector("#active-release-buy");
const releaseButtons = Array.from(document.querySelectorAll(".release-selector .release"));

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
  });
});
