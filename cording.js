const swiper = new Swiper('.swiper', {
    slidesPerGroup: 1, 
	slidesPerView: 2, 
    loop: true,          
    pagination: {
	    el: '.swiper-pagination',
	    type: 'bullets',
			clickable: true,
	  },
    autoplay: {
        delay: 2000,      
        disableOnInteraction: false 
    },
    fadeEffect: {
        crossFade: true   
    }
});

function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.classList.contains("hidden")) {
      element.style.display = "block";
      element.classList.remove("hidden");
    } else {
      element.style.display = "none";
      element.classList.add("hidden");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("h4, .signature-container img, .signature-container p, .barista-container img,.barista-container p,.food-container img,.food-container p");
   
    const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
            if (entry.isIntersecting) {
               entry.target.classList.add("visible");
               } else {
               entry.target.classList.remove("visible");
               }
           });
       }, { threshold: 0.1 }); 
   
       elements.forEach(element => observer.observe(element));
   });

    document.addEventListener("DOMContentLoaded", function () {
        const addressWrapper = document.querySelector(".address-wrapper");
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                } else {
                    entry.target.style.opacity = "0";
                }
            });
        }, { threshold: 0.2 });
    
        addressWrapper.style.transition = "opacity 0.5s ease-in-out";
        addressWrapper.style.opacity = "0"; 
        observer.observe(addressWrapper);
    });


