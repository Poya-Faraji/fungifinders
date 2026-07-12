const hamburgerBtnElem = document.querySelector(
  "[aria-controls='primary-nav']",
);

const navElem = document.getElementById("primary-nav");

const handleNavToggle = () => {
  const expanded = hamburgerBtnElem.getAttribute("aria-expanded");
  hamburgerBtnElem.ariaExpanded = expanded === "true" ? "false" : "true";
};

hamburgerBtnElem.addEventListener("click", handleNavToggle);
