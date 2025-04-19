
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

 
//  var swiper = new Swiper(".bulletinboard", {
//     navigation: {
//         nextEl: ".carousel-button-next",
//         prevEl: ".carousel-button-prev",
//     },
//  });

/* const accessCarousel = () => {
    let carousel = document.getElementsByClassName("carousel");
    let carousel_items = document.getElementsByClassName("image-stack");
    let prev_button = document.getElementById("previous");
    let next_button = document.getElementById("next");
    console.log(carousel);
    console.log(carousel_items);

    let currentCarouselIndex = 0;

    if (!carousel){
        console.error("Cannot find carousel element");
        return null;
    }

    if(!carousel_items){
         console.error("Cannot find carousel item");
        return null;
    }
}

const moveSlide = (direction) =>{
    
    const newCarouselIndex = 0;

    if(direction == "next"){
        newCarouselIndex = (currentCarouselIndex + 1) % carousel.length;
    }else{
        newCarouselIndex = (currentCarouselIndex - 1 + carousel.length) % carousel.length;
    }
    currentCarouselIndex = newCarouselIndex;
}

accessCarousel()
*/