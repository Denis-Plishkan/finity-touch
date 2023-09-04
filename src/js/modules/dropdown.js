function footerDropdown() {
  const dropdowns = document.querySelectorAll(".dropdown");
  const breakpoint = 768;

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector("h5");
    toggle.addEventListener("click", () => {
      const dropdownMenu = dropdown.querySelector(".dropdown-toggle");
      const dropdownSvg = dropdown.querySelector("svg");
      dropdownMenu.classList.toggle("active");
      dropdownSvg.classList.toggle("active");
    });
  });
}

footerDropdown();
