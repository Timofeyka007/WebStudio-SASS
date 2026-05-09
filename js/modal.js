(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
    return;
  }

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", onBackdropClick);
  document.addEventListener("keydown", onEscapeKey);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }

  function onBackdropClick(event) {
    if (event.target === refs.modal) {
      toggleModal();
    }
  }

  function onEscapeKey(event) {
    if (event.key === "Escape" && !refs.modal.classList.contains("is-hidden")) {
      toggleModal();
    }
  }
})();
