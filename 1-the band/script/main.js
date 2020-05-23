let touch = document.querySelector('.touch');
let hideNavByNavLink = document.getElementsByClassName('hnav');
let nav = document.querySelector('.nav');


touch.addEventListener('click', function(e) {
    nav.classList.toggle('navshow');
})

for (let i = 0; i < hideNavByNavLink.length; i++) {

    hideNavByNavLink[i].addEventListener('click', function() {
        nav.classList.toggle('navshow');
    })

}


var slideIndex = 0;
showSlides();

function showSlides() {
    let imageSlideShow = document.querySelectorAll('.image_slideshow');
    for (let i = 0; i < imageSlideShow.length; i++) {
        imageSlideShow[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > imageSlideShow.length) { slideIndex = 1 }
    imageSlideShow[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}