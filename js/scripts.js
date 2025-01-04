// buat counter dihalaman home footer
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target"); // Ambil angka target
      const current = +counter.innerText; // Ambil angka saat ini
      const increment = target / 200; // Tentukan kecepatan animasi (200 iterasi)

      if (current < target) {
        counter.innerText = Math.ceil(current + increment); // Update angka
        setTimeout(updateCount, 10); // Ulangi setiap 10ms
      } else {
        counter.innerText = target; // Pastikan angka mencapai target
      }
    };

    updateCount();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const description = document.querySelector(".home-description");
  const words = description.textContent.split(" "); // Pecah teks menjadi array kata
  description.innerHTML = words.map((word) => `<span>${word}</span>`).join(" "); // Bungkus setiap kata dengan <span>
});

// modal checkout
document
  .querySelector("#submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Show the modal
    const modal = document.querySelector("#checkoutModal");
    modal.style.display = "flex";

    // Countdown logic
    let countdown = 2;
    const countdownElement = document.querySelector("#countdown");
    const interval = setInterval(() => {
      countdown -= 1;
      countdownElement.textContent = countdown;
      if (countdown <= 0) {
        clearInterval(interval);
        // Redirect to home page
        window.location.href = "../html/index.html"; // Change to your home page URL
      }
    }, 1000);
  });
