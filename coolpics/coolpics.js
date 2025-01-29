const menu_button = document.querySelector(".menu-button");

function toggle_menu() {
  const menu = document.querySelector(".menu");

  menu.classList.toggle("hide");
}

menu_button.addEventListener("click", toggle_menu);

function handle_resize() {
  if (window.innerWidth > 1000) {
    const menu = document.querySelector(".menu");
    menu.classList.remove(".hide");
  } else {
    menu.classList.add(".hide");
  }
  handle_resize();
  window.addEventListener("resize", handle_resize);
}

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
              <button class="close-viewer">X</button>
              <img src="${pic}" alt="${alt}" class="modal-image">
            </div>`;
}

function viewHandler(event) {
  const clickedImage = event.target;

  const imageSrc = clickedImage.src.split("-")[0] + "-full.jpeg";

  const altText = clickedImage.alt;

  const modalHTML = viewerTemplate(imageSrc, altText);

  document.body.insertAdjacentHTML("afterbegin", modalHTML);

  const closeButton = document.querySelector(".close-viewer");
  closeButton.addEventListener("click", closeViewer);
}

function closeViewer() {
  const viewer = document.querySelector(".viewer");
  viewer.remove(); 
}

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);