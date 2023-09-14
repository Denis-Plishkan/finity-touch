function freqDropdown() {
  const dropdowns = document.querySelectorAll(".freq__inner-ul");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      const dropdownMenu = dropdown.querySelector(".dropdown-toggle");
      const dropdownSvg = dropdown.querySelector("svg");
      const dropdownText = dropdown.querySelector("p");

      if (e.target !== dropdownText) {
        dropdownMenu.classList.toggle("active");
        dropdownSvg.classList.toggle("active");
      }
    });
  });
}

freqDropdown();

function askedDropdown() {
  const dropdowns = document.querySelectorAll(".asked__inner-ul");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      const dropdownMenu = dropdown.querySelector(".dropdown-toggle");
      const dropdownSvg = dropdown.querySelector("svg");
      const dropdownText = dropdown.querySelector("p");

      if (e.target !== dropdownText) {
        dropdownMenu.classList.toggle("active");
        dropdownSvg.classList.toggle("active");
      }
    });
  });
}

askedDropdown();
