console.log('This is a popup!');
function getTitle() {
    const titleElement = document.querySelector(
        "ytd-watch-metadata yt-formatted-string"
    );

    return titleElement?.textContent.trim() || null;
}
console.log(getTitle());