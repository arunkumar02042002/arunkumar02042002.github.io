// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();

function openSidebar() {
  document.getElementById("portfolio-sidebar").setAttribute('style', 'display:flex !important; ');
}

function closeSidebar() {
  document.getElementById("portfolio-sidebar").setAttribute('style', 'display:none !important;');
}



if (matchMedia("(min-width: 835px)").matches) {
  // the viewport is at least 900 pixels wide
  closeSidebar();
}