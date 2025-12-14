// =============================
// Hover glow on project cards
// =============================
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 22px 55px rgba(159,107,255,0.35)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});


// =============================
// Scroll-based animations
// =============================
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("section, .project-card").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});


// =============================
// 🌗 Light / Dark mode toggle
// =============================
const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggle.textContent =
      document.body.classList.contains("light") ? "☀️" : "🌙";
  });
}


// =============================
// 🏅 Certifications modal (PDF-based)
// =============================
const modal = document.getElementById("certModal");
const modalPdf = document.getElementById("modalPdf");
const closeModal = document.getElementById("closeModal");

if (modal && modalPdf && closeModal) {
  // Open PDF when certificate card is clicked
  document.querySelectorAll(".cert-card").forEach(card => {
    card.addEventListener("click", () => {
      const pdfPath = card.getAttribute("data-pdf");
      modalPdf.src = pdfPath;
      modal.style.display = "flex";
    });
  });

  // Close modal on X click
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalPdf.src = "";
  });

  // Close modal when clicking outside iframe
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalPdf.src = "";
    }
  });
}
