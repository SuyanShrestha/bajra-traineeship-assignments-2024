const dialogs = document.querySelectorAll(".details");
const wrappers = document.querySelectorAll(".wrapper");
const arrowIcons = document.querySelectorAll(".arrow-icon");

// search bar
const searchBox = document.getElementById("searchbox");
const assignmentCards = document.querySelectorAll(".assignment-card");

const overlay = document.getElementById("overlay");

let timeoutId;

const showDetails = (dialog, show) => {
  if (show) {
    dialog.showModal();
    overlay.style.display = "block";
  } else {
    dialog.close();
    overlay.style.display = "none";
  }
};

dialogs.forEach((dialog, index) => {
  dialog.addEventListener(
    "click",
    (e) => !wrappers[index].contains(e.target) && showDetails(dialog, false)
  );
});

arrowIcons.forEach((arrowIcon, index) => {
  arrowIcon.addEventListener("click", () => showDetails(dialogs[index], true));
});

// search bar
searchBox.addEventListener("input", function () {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    const searchTerm = searchBox.value.trim().toLowerCase();
    console.log(`Search term is: ${searchTerm}`);

    assignmentCards.forEach(function (card) {
      const title = card.querySelector(".project-title").textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        card.classList.remove("hide-search");
        console.log('removehide')
      } else {
        card.classList.add("hide-search");
        console.log('hide')
      }
    });

  }, 500);
});
