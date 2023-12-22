// const meals = [];
// function myFunction () {
//     const dots = document.getElementById("dots");
//     const moreText = document.getElementById("more");
//     const buttonText = document.getElementById("myButton");
//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         buttonText.innerHTML = "View More";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         buttonText.innerHTML = "View Less";
//         moreText.style.display = "inline";
//     }
// }

const modal = document.getElementById("myModal1");
const myModalButton = document.getElementById("myModalButton");
const span = document.getElementsByClassName("close")[0];
button.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
     if (event.target == modal) {
        modal.style.display = "none";
    }
}