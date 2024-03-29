"use strict";

function responsiveNavBar() {
    var nav = document.getElementById("nav");
    if(nav.className) {
      nav.className = "";
    } else {
      nav.className = "active";
    }
  }
  
// ------------------------ Intro slider --------------------------
$('#owl-demo').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [$('.elipse_prev'), $('.elipse_next')],
    items: 1
})

// ------------------------ Partners slider --------------------------
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsiveClass: true,
    navText: [$('.partners_slider_img_prev'), $('.partners_slider_img_next')],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1200: {
            items: 4
        }
    }
})

// ------------------------ Initialize and add the map--------------------------
function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: uluru, draggable: false, zoomControl: false});
    // map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true});

    // The marker, positioned at Uluru
    // var marker = new google.maps.Marker({position: uluru, map: map});
}

// --------------------------- custom slider Intro ---------------------------------
// const introSlideData = [
//     {
//         topText: "Reviews Ratings Comparisons",
//         bottomText: "Unbiased Reviews That Save You Time and Money",
//         picture: "vector.png"
//     },
//     {
//         topText: "Top text 2",
//         bottomText: "Bottom text 2",
//         picture: "capture.jpg"
//     },
//     {
//         topText: "Top text 3",
//         bottomText: "Bottom text 3",
//         picture: "soldier.jpg"
//     }
// ];

// function introSlider(target) {
//     var topText = document.getElementById("top_text"),
//         bottomText = document.getElementById("bottom_text"),
//         heroImg = document.getElementById("hero_img"),
//         imgSource = heroImg.src.slice(heroImg.src.indexOf("/intro/")),
//         currentImg = imgSource.split("/")[2],
//         currImgIndex;

//     for (var val of introSlideData) {
//         if (val.picture === currentImg) {
//             currImgIndex = introSlideData.indexOf(val);
//             break;
//         }
//     }

//     if(target.id === "next") {
//         if(currentImg === introSlideData[introSlideData.length-1].picture) {
//             heroImg.src = heroImg.src.replace(imgSource, "/intro/" + introSlideData[0].picture);
//             heroImg.alt = introSlideData[0].picture.split(".")[1];
//             topText.innerText = introSlideData[0].topText;
//             bottomText.innerText = introSlideData[0].bottomText;
//         }
//         else {
//             heroImg.src = heroImg.src.replace(imgSource, "/intro/" + introSlideData[currImgIndex + 1].picture);
//             heroImg.alt = introSlideData[0].picture.split(".")[1];
//             topText.innerText = introSlideData[currImgIndex + 1].topText;
//             bottomText.innerText = introSlideData[currImgIndex + 1].bottomText;
//         }
//     } 
//     else {
//         if(currentImg === introSlideData[0].picture) {
//             heroImg.src = heroImg.src.replace(imgSource, "/intro/" + introSlideData[introSlideData.length-1].picture);
//             heroImg.alt = introSlideData[0].picture.split(".")[1];
//             topText.innerText = introSlideData[introSlideData.length-1].topText;
//             bottomText.innerText = introSlideData[introSlideData.length-1].bottomText;
//         } 
//         else {
//             heroImg.src = heroImg.src.replace(imgSource, "/intro/" + introSlideData[currImgIndex - 1].picture);
//             heroImg.alt = introSlideData[0].picture.split(".")[1];
//             topText.innerText = introSlideData[currImgIndex - 1].topText;
//             bottomText.innerText = introSlideData[currImgIndex - 1].bottomText;
//         }
//     }
// }