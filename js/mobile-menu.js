(() => {
  const menu = document.querySelector("[data-menu]");
  const openBtn = document.querySelector("[data-menu-open]");
  const closeBtn = document.querySelector("[data-menu-close]");
  const menuLinks = document.querySelectorAll(".mobile-menu__nav-link, .mobile-menu__social-link");
  const desktopMedia = window.matchMedia("(min-width: 768px)");

  if (!menu || !openBtn || !closeBtn) {
    return;
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  menuLinks.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", onEscapeKey);
  desktopMedia.addEventListener("change", onDesktopMediaChange);

  function openMenu() {
    menu.classList.add("is-open");
    document.body.classList.add("no-scroll");
    openBtn.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
    openBtn.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
  }

  function onEscapeKey(event) {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      closeMenu();
    }
  }

  function onDesktopMediaChange(event) {
    if (event.matches) {
      closeMenu();
    }
  }
})();
