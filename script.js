const audio = document.getElementById("weddingMusic");
const toggle = document.getElementById("musicToggle");
const label = document.getElementById("musicLabel");

toggle.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      label.textContent = "Pause music";
      toggle.setAttribute("aria-label", "Pause background music");
    } catch (e) {
      label.textContent = "Tap to play";
    }
  } else {
    audio.pause();
    label.textContent = "Play music";
    toggle.setAttribute("aria-label", "Play background music");
  }
});

function updateCountdown() {
  // India Standard Time is UTC+05:30. Wedding starts 12 Dec 2026 at 7 PM IST.
  const target = new Date("2026-12-12T19:00:00+05:30").getTime();
  const now = Date.now();
  const distance = target - now;
  const ids = ["days", "hours", "minutes", "seconds"];
  if (distance <= 0) {
    document.querySelector(".countdown").innerHTML = "<p>Today is the big day! ❤️</p>";
    return;
  }
  const values = [
    Math.floor(distance / (1000 * 60 * 60 * 24)),
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    Math.floor((distance % (1000 * 60)) / 1000)
  ];
  ids.forEach((id, i) => document.getElementById(id).textContent = String(values[i]).padStart(2, "0"));
}
updateCountdown();
setInterval(updateCountdown, 1000);
