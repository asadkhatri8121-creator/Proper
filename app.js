// =======================================
// GSAP
// =======================================

gsap.registerPlugin(ScrollTrigger);

// =======================================
// CURSOR GLOW
// =======================================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    if (!glow) return;

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

// =======================================
// NAVBAR BLUR
// =======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 60) {

        header.style.background = "rgba(8,10,25,.80)";
        header.style.backdropFilter = "blur(25px)";
        header.style.boxShadow = "0 10px 40px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(8,10,25,.35)";
        header.style.boxShadow = "none";

    }

});

// =======================================
// SMOOTH SCROLL
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// =======================================
// HERO ANIMATION
// =======================================

gsap.from(".logo", {

    opacity:0,
    y:-40,
    duration:1

});

gsap.from(".navbar ul li", {

    opacity:0,
    y:-30,
    duration:1,
    stagger:.12

});

gsap.from(".nav-btn", {

    opacity:0,
    x:50,
    duration:1

});

gsap.from(".tag", {

    opacity:0,
    y:50,
    duration:1,
    delay:.3

});

gsap.from(".hero-left h1", {

    opacity:0,
    y:60,
    duration:1,
    delay:.5

});

gsap.from(".hero-left p", {

    opacity:0,
    y:40,
    duration:1,
    delay:.8

});

gsap.from(".hero-buttons button", {

    opacity:0,
    y:50,
    duration:1,
    delay:1,
    stagger:.2

});

gsap.from(".dashboard-card", {

    opacity:0,
    scale:.7,
    rotate:6,
    duration:1.3,
    delay:1

});

// =======================================
// FLOATING CARD
// =======================================

gsap.to(".dashboard-card", {

    y:-18,

    duration:3,

    repeat:-1,

    yoyo:true,

    ease:"power1.inOut"

});

// =======================================
// BUTTON HOVER
// =======================================

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        gsap.to(btn, {

            scale:1.05,
            duration:.3

        });

    });

    btn.addEventListener("mouseleave", () => {

        gsap.to(btn, {

            scale:1,
            duration:.3

        });

    });

});

// =======================================
// ACTIVE NAV LINK
// =======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
// =======================================
// SCROLL REVEAL
// =======================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(
".feature-card,.service-card,.portfolio-card,.pricing-card,.about-card,.contact-card,.section-title"
).forEach(el => {

    observer.observe(el);

});

// =======================================
// HERO COUNTER
// =======================================

const counters = document.querySelectorAll(".hero-stats h2");

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".hero-stats");

    if (!stats) return;

    const trigger = stats.offsetTop - 500;

    if (window.scrollY > trigger && !counterStarted) {

        counterStarted = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const target = parseInt(text.replace(/\D/g, ""));

            const suffix = text.replace(/[0-9]/g, "");

            let count = 0;

            const speed = Math.max(20, target / 100);

            function update() {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count) + suffix;

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + suffix;

                }

            }

            update();

        });

    }

});

// =======================================
// RIPPLE BUTTON EFFECT
// =======================================

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const size = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = size + "px";
        circle.style.height = size + "px";

        circle.style.left = e.offsetX - size / 2 + "px";
        circle.style.top = e.offsetY - size / 2 + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});

// =======================================
// HERO PARALLAX
// =======================================

const heroRight = document.querySelector(".hero-right");

window.addEventListener("mousemove", (e) => {

    if (!heroRight) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroRight.style.transform =
        `translate(${x}px,${y}px)`;

});

// =======================================
// DASHBOARD CARD GLOW
// =======================================

const dashboard = document.querySelector(".dashboard-card");

if (dashboard) {

dashboard.addEventListener("mousemove", (e) => {

const rect = dashboard.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

dashboard.style.background =

`radial-gradient(circle at ${x}px ${y}px,

rgba(0,217,255,.20),

rgba(255,255,255,.05) 60%)`;

});

dashboard.addEventListener("mouseleave", () => {

dashboard.style.background =
"rgba(255,255,255,.05)";

});

}

// =======================================
// SCROLL PROGRESS BAR
// =======================================

const progress = document.createElement("div");

progress.className = "progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

const total =
document.documentElement.scrollHeight - window.innerHeight;

const value =

(window.scrollY / total) * 100;

progress.style.width = value + "%";

});

// =======================================
// BACK TO TOP
// =======================================

const topBtn = document.createElement("button");

topBtn.className = "top-btn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

if (window.scrollY > 500) {

topBtn.classList.add("show");

} else {

topBtn.classList.remove("show");

}

});

topBtn.onclick = () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// =======================================
// GSAP SCROLL ANIMATION
// =======================================

gsap.utils.toArray("section").forEach(section => {

gsap.from(section,{

scrollTrigger:{

trigger:section,

start:"top 80%"

},

opacity:0,

y:80,

duration:1

});

});

// =======================================
// FLOATING ICONS
// =======================================

gsap.to(".card i",{

y:-8,

repeat:-1,

yoyo:true,

stagger:.2,

duration:2,

ease:"power1.inOut"

});
// ======================================
// CODE WINDOW 3D TILT
// ======================================

const codeWindow = document.querySelector(".code-window");

if(codeWindow){

codeWindow.addEventListener("mousemove",(e)=>{

const rect = codeWindow.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateX = -(y - rect.height/2) / 18;
const rotateY = (x - rect.width/2) / 18;

codeWindow.style.transform =
`perspective(1200px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)`;

});

codeWindow.addEventListener("mouseleave",()=>{

codeWindow.style.transform =
"perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";

});

}

// ======================================
// FLOATING ICONS
// ======================================

document.querySelectorAll(".floating-icon").forEach((icon,index)=>{

gsap.to(icon,{

y:-25,

duration:2+index,

repeat:-1,

yoyo:true,

ease:"power1.inOut"

});

});
// ======================================
// CODE WINDOW
// ======================================

const codeWindow = document.querySelector(".code-window");

// ======================================
// TERMINAL TYPING
// ======================================

const terminalLines = document.querySelectorAll(".terminal p");

terminalLines.forEach((line, index) => {

    const text = line.textContent;

    line.textContent = "";

    let i = 0;

    setTimeout(() => {

        const typing = setInterval(() => {

            line.textContent += text.charAt(i);

            i++;

            if (i >= text.length) {

                clearInterval(typing);

            }

        }, 35);

    }, index * 800);

});

// ======================================
// WINDOW FLOAT
// ======================================

if (codeWindow) {

    gsap.to(codeWindow, {

        y: -15,

        duration: 3,

        repeat: -1,

        yoyo: true,

        ease: "power1.inOut"

    });

}

// ======================================
// RANDOM GLOW
// ======================================

setInterval(() => {

    if (codeWindow) {

        codeWindow.style.boxShadow =
            `0 30px 80px rgba(0,217,255,${Math.random() * 0.35})`;

    }

}, 1200);

// ======================================
// APPEAR ANIMATION
// ======================================

gsap.from(".code-window", {

    opacity: 0,

    x: 120,

    duration: 1.3,

    delay: .8,

    ease: "power3.out"

});

gsap.from(".code-body span", {

    opacity: 0,

    y: 15,

    stagger: .05,

    duration: .4,

    delay: 1.2

});

// ======================================
// HERO BUTTONS
// ======================================

gsap.from(".hero-buttons button", {

    opacity: 0,

    y: 40,

    stagger: .2,

    duration: 1,

    delay: .6

});

// ======================================
// HERO STATS
// ======================================

gsap.from(".hero-stats div", {

    opacity: 0,

    y: 50,

    stagger: .2,

    duration: 1,

    delay: 1

});
// ===============================
// WHY CHOOSE US ANIMATION
// ===============================

gsap.from(".why-card",{
    scrollTrigger:{
        trigger:".why-us",
        start:"top 75%"
    },
    opacity:0,
    y:80,
    duration:1,
    stagger:0.2,
    ease:"power3.out"
});

document.querySelectorAll(".why-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        gsap.to(card,{
            scale:1.03,
            duration:.3
        });

    });

    card.addEventListener("mouseleave",()=>{

        gsap.to(card,{
            scale:1,
            duration:.3
        });

    });

});
// ======================================
// PORTFOLIO ANIMATION
// ======================================

gsap.from(".project-card",{

scrollTrigger:{
trigger:".portfolio",
start:"top 75%"
},

opacity:0,
y:80,
duration:1,
stagger:0.2,
ease:"power3.out"

});

// Hover Scale

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

gsap.to(card,{
scale:1.03,
duration:.3
});

});

card.addEventListener("mouseleave",()=>{

gsap.to(card,{
scale:1,
duration:.3
});

});

});
// =========================================
// TECHNOLOGY SECTION ANIMATION
// =========================================

const techCards = document.querySelectorAll(".tech-card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

const bar = entry.target.querySelector(".progress-bar");

const width = bar.dataset.width;

bar.style.width = width;

}

});

},{
threshold:.25
});

techCards.forEach(card=>{

const bar = card.querySelector(".progress-bar");

bar.dataset.width = bar.style.width;

bar.style.width = "0%";

observer.observe(card);

});

// =========================================
// CARD TILT EFFECT
// =========================================

techCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY = ((x / rect.width)-0.5)*12;
const rotateX = ((y / rect.height)-0.5)*-12;

card.style.transform =
`perspective(1000px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0)";

});

});

// =========================================
// FLOATING ICON
// =========================================

techCards.forEach((card,index)=>{

card.animate(

[
{transform:"translateY(0px)"},
{transform:"translateY(-8px)"},
{transform:"translateY(0px)"}
],

{
duration:3500 + (index*250),
iterations:Infinity,
easing:"ease-in-out"
}

);

});
/*=========================================
    ACHIEVEMENT SECTION
=========================================*/

const achievementCards = document.querySelectorAll(".achievement-card");
const counters = document.querySelectorAll(".counter");

const achievementObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            const counter = entry.target.querySelector(".counter");

            if(counter && !counter.classList.contains("counted")){

                counter.classList.add("counted");

                startCounter(counter);

            }

        }

    });

},{
    threshold:0.3
});

achievementCards.forEach(card=>{

    achievementObserver.observe(card);

});


function startCounter(counter){

    const target = Number(counter.dataset.target);

    const duration = 1800;

    const start = 0;

    const startTime = performance.now();

    function update(currentTime){

        const progress = Math.min((currentTime - startTime) / duration,1);

        const value = Math.floor(progress * target);

        counter.innerText = value;

        if(progress < 1){

            requestAnimationFrame(update);

        }else{

            counter.innerText = target;

        }

    }

    requestAnimationFrame(update);

}

window.addEventListener("scroll", () => {
  let reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(7,10,24,0.85)";
    header.style.backdropFilter = "blur(25px)";
  } else {
    header.style.background = "rgba(7,10,24,0.45)";
    header.style.backdropFilter = "blur(20px)";
  }
});
const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", function (e) {

    let ripple = document.createElement("span");
    ripple.classList.add("ripple");

    this.appendChild(ripple);

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    setTimeout(() => {
      ripple.remove();
    }, 600);

  });
});
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", function (e) {

    let ripple = document.createElement("span");
    ripple.classList.add("ripple");

    this.appendChild(ripple);

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    setTimeout(() => {
      ripple.remove();
    }, 600);

  });
});
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar ul");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }
});
