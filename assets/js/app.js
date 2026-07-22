/*=========================================================
SUP de FLE
Study in France Consulting
Version 0.4
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Smooth appearance
    ========================== */

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });

    document.querySelectorAll(".feature,.hero-card,.hero-badge,.btn")
        .forEach(el=>observer.observe(el));

    /* ==========================
       Counter animation
    ========================== */

    const counters=document.querySelectorAll("[data-counter]");

    counters.forEach(counter=>{

        const target=parseInt(counter.dataset.counter);

        let value=0;

        const speed=target/80;

        const update=()=>{

            value+=speed;

            if(value<target){

                counter.textContent=Math.floor(value);

                requestAnimationFrame(update);

            }else{

                counter.textContent=target;

            }

        };

        update();

    });

    /* ==========================
       Sticky Navbar (future)
    ========================== */

    window.addEventListener("scroll",()=>{

        const nav=document.querySelector("nav");

        if(!nav) return;

        if(window.scrollY>80){

            nav.classList.add("sticky");

        }else{

            nav.classList.remove("sticky");

        }

    });

});