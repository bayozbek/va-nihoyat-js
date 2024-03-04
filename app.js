const countText = document.querySelector(".countText")

let count = 0;

countText.innerHTML = count;

function Increment() {
    count = count + 1;
    countText.innerHTML = count;
}

function resetCount() {
    count = 0;
    countText.innerHTML = count;
}

// const sidebar = document.querySelector("aside")
// const sidebar_wrapper = document.querySelector(".sidebar_wrapper");

// function openSidebar() {
//     sidebar_wrapper.computedStyleMap.display = "flex";
//     sidebar.style.left = 0;
// }

// function closeSidebar() {
//     sidebar_wrapper.style.display = "none"
//     sidebar.style.left = "-100%"
// }