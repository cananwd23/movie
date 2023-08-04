const arrows = document.querySelectorAll(".arrow");
movieLists = document.querySelectorAll(".movie-list");

console.log(movieLists[0]);
arrows.forEach((arrow, i)=>{
    const widthRatio = Math.floor(window.innerWidth / 300);
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;

    arrow.addEventListener("click", function () {
        clickCounter++;

        if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
            }px)`;
        }else{
            movieLists[i].style.transform = "translateX(0)"
            clickCounter = 0;
        }
    });
})

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.sidebar,.sidebar i,.navbar,.toggle-ball,.profile-text-container i,.profile-text-container a,.movie-list-filter select,.footer-main,.toggle,.footer-i,.footer-list-item,.toggle-ball")

ball.addEventListener("click", function(){
    items.forEach((item) => item.classList.toggle("active"))
})
/*console.log(window.innerWidth);*/