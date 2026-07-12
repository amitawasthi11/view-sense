console.log("YT Track Extension Loaded 🚀");
function getTitle() {
  const title = document.querySelector(
  "ytd-watch-metadata yt-formatted-string"
)?.textContent.trim();

console.log(title);
}
console.log(getTitle());
// console.log("Content script loaded!");
// alert("Content script loaded!");