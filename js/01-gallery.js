import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const listEl = document.querySelector(".gallery");

const markup = createMarkup(galleryItems);

listEl.insertAdjacentHTML("beforeend", markup);
listEl.addEventListener("click", onClick);

function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item" data-name="${description}">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onClick(evt) {
  evt.preventDefault();

  if (evt.target === evt.currentTarget) {
    return;
  }

  const targetNameGalleryItem =
    evt.target.closest(".gallery__item").dataset.name;

  const dataGalleryItem = galleryItems.find(
    (item) => item.description === targetNameGalleryItem
  );

  const instance = basicLightbox.create(`
    <div class="modal">
     <img
      src="${dataGalleryItem.original}"
      alt="${dataGalleryItem.description}"
    />
    </div>
`);

  instance.show();
}
