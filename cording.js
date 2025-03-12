const mediaQueryList = matchMedia('(min-width:720px)');
const slidePerView_ = mediaQueryList.matches ? 2 : 1;

const swiper = new Swiper('.swiper', {
    slidesPerGroup: 1, 
    slidesPerView: slidePerView_, 
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
    },
    scrollbar: {
        el: '.swiper-scrollbar', // スクロールバー要素
        draggable: true         // ドラッグでスライド可能
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
    let headers = document.querySelectorAll(".toggle-header");

    headers.forEach(header => {
        header.addEventListener("click", function () {
            let content = this.nextElementSibling;
            let paragraphs = content.querySelectorAll("p");

            if (content.classList.contains("show")) {
                content.classList.remove("show");
                paragraphs.forEach(p => {
                    p.style.opacity = "0";
                    p.style.transform = "translateY(10px)";
                });
            } else {
                content.classList.add("show");
                paragraphs.forEach((p, index) => {
                    setTimeout(() => {
                        p.style.opacity = "1";
                        p.style.transform = "translateY(0)";
                    }, index * 200);
                });
            }
        });
    });
});


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

    document.addEventListener("DOMContentLoaded", function () {
        const shopWrapper = document.querySelector(".shop-wrapper");
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                } else {
                    entry.target.style.opacity = "0";
                }
            });
        }, { threshold: 0.1 });
    
        shopWrapper.style.transition = "opacity 0.5s ease-in-out";
        shopWrapper.style.opacity = "0"; 
        observer.observe(shopWrapper);
    });

/*スマホ用JS*/
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector(".nav-menu");

    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active"); // メニューの表示・非表示を切り替え
    });
});
