function freqDropdown() {
  const dropdowns = document.querySelectorAll(".dropdown");

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

freqDropdown();
