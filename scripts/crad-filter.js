const cardsElements = document.querySelectorAll(".mushroom-guide .card");
const seasonSelectInput = document.getElementById("season");
const edibileSelectInput = document.getElementById("edible");

// if users have js disabled: start
const enableSelectionFiltering = () => {
  seasonSelectInput.hidden = false;
  edibileSelectInput.hidden = false;
};
enableSelectionFiltering();
// end

const notResultMessageElem = document.querySelector(".no-results-message");
const currentFilter = {
  season: seasonSelectInput.value.toLowerCase(),
  edible: edibileSelectInput.value.toLowerCase(),
};

const filterCards = () => {
  const seasonAll = currentFilter.season === "all";
  const edibleAll = currentFilter.edible === "all";

  let hasVisableCards = false;

  cardsElements.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;

    const matchSeason = season === currentFilter.season;
    const matchEdible = edible === currentFilter.edible;

    if ((matchSeason || seasonAll) && (matchEdible || edibleAll)) {
      card.hidden = false;
      hasVisableCards = true;
    } else {
      card.hidden = true;
    }

    notResultMessageElem.hidden = hasVisableCards ? true : false;
  });
};

const updateFilter = (e) => {
  const filterType = e.target.name;

  if (filterType === "season" || filterType === "edible") {
    currentFilter[filterType] = e.target.value;
    filterCards();
  }
};

seasonSelectInput.addEventListener("change", updateFilter);
edibileSelectInput.addEventListener("change", updateFilter);
