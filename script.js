const bar = document.querySelector(".bar");
const leftCotainer = document.querySelector(".leftCotainer");
const shadowNav = document.querySelector(".shadowNav");
const counters = document.querySelectorAll(".counter");

bar.addEventListener("click", () => {
  leftCotainer.classList.remove("hidden");
});
shadowNav.addEventListener("click", () => {
  leftCotainer.classList.add("hidden");
});

// Counter Part

counters.forEach((counter) => {
  counter.innerHTML = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerHTML;
    const increment = target / 200;
    if (c < target) {
      counter.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 2.5);
    }
  };
  updateCounter();
});
