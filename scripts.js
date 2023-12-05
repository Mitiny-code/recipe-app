// const meals = [];
function myFunction () {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const buttonText = document.getElementById("myButton");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        buttonText.innerHTML = "View More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        buttonText.innerHTML = "View Less";
        moreText.style.display = "inline";
    }
}