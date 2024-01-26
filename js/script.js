//   toggle
let menutoggle = document.querySelector('.toggle');
                menutoggle.onclick = function(){
                    menutoggle.classList.toggle('active')
                }

// video player 

window.addEventListener('load', async () => {
    let video = document.querySelector('video[muted][autoplay]');
    try {
      await video.play();
    } catch (err) {
      video.controls = true;
    }
  });

  // gallery 
    $('.gallery_img').magnificPopup({type:'image'});


// AOS Animation
AOS.init();

// owl carousel


$(document).ready(function(){
  $('.feature_carousel').owlCarousel({
    items:1,
    loop:false,
    centre:true,
    autoplay:false,
})
});

// Drawer menu

document.querySelector(".ham").addEventListener("click",changeIcon);

function changeIcon(event){
  let ham = event.currentTarget;
  ham.classList.toggle("clicked");
    ham.children[0].classList.toggle('rotate-left');
    ham.children[1].classList.toggle('vanish');
    ham.children[2].classList.toggle('rotate-right');
    document.querySelector(".drawer-items").classList.toggle("visible");
}
