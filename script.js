const dialogs = document.querySelectorAll('.details');
const wrappers = document.querySelectorAll('.wrapper');
const arrowIcons = document.querySelectorAll('.arrow-icon');

const overlay = document.getElementById('overlay');

const showDetails = (dialog, show) => {
  if (show) {
    dialog.showModal();
    overlay.style.display = 'block';
  } else {
    dialog.close();
    overlay.style.display = 'none';
  }
};

dialogs.forEach((dialog, index) => {
  dialog.addEventListener('click', (e) => !wrappers[index].contains(e.target) && showDetails(dialog, false));
});

arrowIcons.forEach((arrowIcon, index) => {
  arrowIcon.addEventListener('click', () => showDetails(dialogs[index], true));
});