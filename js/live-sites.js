// Drives "View live sites" dropdowns in case study outcome sections:
// toggles the panel open/closed, closes on outside click or Escape.
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".cs-live-sites__toggle");
  if (!toggles.length) return;

  function closePanel(toggle) {
    const panel = document.getElementById(toggle.getAttribute("aria-controls"));
    toggle.setAttribute("aria-expanded", "false");
    if (panel) panel.hidden = true;
  }

  function openPanel(toggle) {
    const panel = document.getElementById(toggle.getAttribute("aria-controls"));
    toggle.setAttribute("aria-expanded", "true");
    if (panel) panel.hidden = false;
  }

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closePanel(toggle);
      } else {
        openPanel(toggle);
      }
    });
  });

  document.addEventListener("click", (event) => {
    toggles.forEach((toggle) => {
      if (toggle.getAttribute("aria-expanded") !== "true") return;
      const wrapper = toggle.closest(".cs-live-sites");
      if (wrapper && !wrapper.contains(event.target)) {
        closePanel(toggle);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    toggles.forEach((toggle) => {
      if (toggle.getAttribute("aria-expanded") === "true") {
        closePanel(toggle);
        toggle.focus();
      }
    });
  });
});
