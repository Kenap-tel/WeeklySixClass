const input = document.getElementById("myInput");
const heading = document.getElementById("myHeading");

input.addEventListener("mouseover", function() {
    heading.style.display = "block";
});

input.addEventListener("mouseout", function() {
    heading.style.display = "none";
});