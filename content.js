// document.addEventListener("yt-navigate-finish", () => {
//     const element = document.querySelector(
//         "h1.style-scope.ytd-watch-metadata yt-formatted-string"
//     );

//     console.log(element);
//     console.log(element?.innerHTML);
//     console.log(element?.textContent);
// });
document.addEventListener("yt-navigate-finish", () => {
    const titleElement = document.querySelector(
        "h1.style-scope.ytd-watch-metadata yt-formatted-string"
    );

    if (!titleElement) return;

    const title = titleElement.textContent.trim();

    console.log("Saving:", title);

    chrome.storage.local.set({ title }, () => {
        console.log("Saved!");
    });
});