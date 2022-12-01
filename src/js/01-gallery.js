import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const createGalleryBox = document.querySelector('.gallery');
const cards = createItem(galleryItems);

createGalleryBox.insertAdjacentHTML('beforeend', cards);

function createItem(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}" />
          </a></li>`;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionType: 'alt',
  captionDelay: '250',
  overlayOpacity: '0.9',
  showCounter: false,
});
console.log(galleryItems);
