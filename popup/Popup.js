// const titleDiv = document.querySelector(".title");

// chrome.storage.local.get("title", (result) => {
//   titleDiv.textContent = result.title || "No title found";
// });
const titleDiv = document.querySelector(".title");

chrome.storage.local.get("title", (result) => {
    console.log(result);
    titleDiv.textContent = result.title || "No title found";
});