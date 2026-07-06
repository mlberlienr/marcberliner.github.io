document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footerYear = document.querySelector("[data-year]");
  if (footerYear) {
    footerYear.textContent = year;
  }
});
