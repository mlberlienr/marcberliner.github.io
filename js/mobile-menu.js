// Drives the mobile hamburger menu: toggling open/closed, morphing the
// icon into an X (via the .is-open class in CSS), closing on link click,
// Escape, or if the viewport grows back to desktop width.
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  function closeMenu() {
    toggle.classList.remove("is-open");
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }

  function openMenu() {
    toggle.classList.add("is-open");
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden";
  }

  toggle.addEventListener("click", () => {
    if (menu.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      closeMenu();
      toggle.focus();
    }
  });

  const desktopQuery = window.matchMedia("(min-width: 721px)");
  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });
});
