let stars = document.getElementsByClassName("fa-solid");
let emoji = document.getElementById("emoji");

// One Star Animation
stars[0].onclick = function (){
    stars[0].style.color = "#ffd93b"
    stars[1].style.color = "#e4e4e4"
    stars[2].style.color = "#e4e4e4"
    stars[3].style.color = "#e4e4e4"
    stars[4].style.color = "#e4e4e4"
    emoji.style.transform = "translateX(0)";
}
// Two Star Animation
stars[1].onclick = function (){
    stars[0].style.color = "#ffd93b"
    stars[1].style.color = "#ffd93b"
    stars[2].style.color = "#e4e4e4"
    stars[3].style.color = "#e4e4e4"
    stars[4].style.color = "#e4e4e4"
    emoji.style.transform = "translateX(-100px)";
}
// Two Star Animation
stars[2].onclick = function (){
    stars[0].style.color = "#ffd93b"
    stars[1].style.color = "#ffd93b"
    stars[2].style.color = "#ffd93b"
    stars[3].style.color = "#e4e4e4"
    stars[4].style.color = "#e4e4e4"
    emoji.style.transform = "translateX(-200px)";
}
// Two Star Animation
stars[3].onclick = function (){
    stars[0].style.color = "#ffd93b"
    stars[1].style.color = "#ffd93b"
    stars[2].style.color = "#ffd93b"
    stars[3].style.color = "#ffd93b"
    stars[4].style.color = "#e4e4e4"
    emoji.style.transform = "translateX(-300px)";
}
// Two Star Animation
stars[4].onclick = function (){
    stars[0].style.color = "#ffd93b"
    stars[1].style.color = "#ffd93b"
    stars[2].style.color = "#ffd93b"
    stars[3].style.color = "#ffd93b"
    stars[4].style.color = "#ffd93b"
    emoji.style.transform = "translateX(-400px)";
}