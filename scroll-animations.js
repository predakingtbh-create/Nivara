
document.addEventListener("DOMContentLoaded", function() {
  const fadeInElements = document.querySelectorAll(".fade-in-element");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  });

  fadeInElements.forEach(element => {
    observer.observe(element);
  });
});
