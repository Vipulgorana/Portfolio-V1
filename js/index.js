const sections = document.querySelectorAll("section");
const sliders = document.querySelectorAll(".slide-in");

// const options = {
//   root: null,
//   threshold: 1,
//   rootMargin: "50px",
// };

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     }
//     entry.target.classList.toggle("demo-red");
//     observer.unobserve(entry.target);
//   });
// }, options);

// sections.forEach((section) => {
//   observer.observe(section);
// });

const appearOptions = {
  threshold: 0,
  rootMargin: "40%",
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

// const more_link = document.getElementById("more-link");
// const read_more = document.getElementById("read-more");
// const project_card = document.querySelector(".project-card");

// const expand = () => {
//   more_link.style.display = "none";
//   read_more.style.display = "block";
//   project_card.style.height = "50vh";
// };
