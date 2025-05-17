const date = new Date("April 26, 2026 00:00:00").getTime();
const para = document.querySelector("p");
const countdownEl = document.querySelector(".countdown");
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");
const h2 = document.querySelector("h2");
const span = document.querySelectorAll("span");
const countChild = document.querySelectorAll("count-child");

h2.innerHTML = "Loading...";
countChild.forEach((c) => {
  c.classList.add("hidden");
});
span.forEach((s) => {
  s.classList.add("hidden");
});

const interval = setInterval(() => {
  const today = new Date().getTime();

  const gap = date - today;

  if (gap <= 0) {
    para.classList.add("hidden");
    countdownEl.innerHTML = "Spirit X 2026 Has Started!";
    clearInterval;
    return;
  }

  const remainDays = Math.floor(gap / (1000 * 60 * 60 * 24));
  const remainHours = Math.floor(
    (gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const remainMins = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const remainSecs = Math.floor((gap % (1000 * 60)) / 1000);

  h2.innerHTML = "";

  countChild.forEach((c) => {
    s.classList.remove("hidden");
  });
  span.forEach((s) => {
    s.classList.remove("hidden");
  });

  days.innerHTML = `${remainDays.toString().padStart(2, "0")} <div class="size">Days</div>`;
  hours.innerHTML = `${remainHours.toString().padStart(2, "0")} <div class="size">Hours</div>`;
  mins.innerHTML = `${remainMins.toString().padStart(2, "0")} <div class="size">Minutes</div>`;
  secs.innerHTML = `${remainSecs.toString().padStart(2, "0")} <div class="size">Seconds</div>`;

  span.forEach((s) => {
    s.innerHTML = ":";
  });
}, 1000);
