const toggle = document.getElementById("toggle");
const nav = document.getElementById("menu");
const sections = document.querySelectorAll(".fade-in");
const timeElement = document.getElementById("time");

toggle.addEventListener("click", () => {
  if (nav.style.opacity == 0) {
    nav.style.opacity = 1;
    nav.style.left = 0;
  } else {
    nav.style.opacity = 0;
    nav.style.left = "-22rem";
  }
});

const options = {
  threshold: 0.004,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-visible");
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

const date = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const todayday = days[date.getDay()];

const updateTime = () => {
  const date = new Date();
  timeElement.textContent = date.toUTCString();
};

const todayTag = document.getElementById("today");

todayTag.innerHTML = todayday;

setInterval(updateTime, 1000);
