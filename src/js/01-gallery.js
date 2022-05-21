import { galleryItems } from './gallery-items.js';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

const galleryEl = document.querySelector(`.gallery`);
const markup = galleryItems
  .map(
    item =>
      `<a class="gallery__item" href=${item.original}>
      <img class="gallery__image" src=${item.preview} alt=${item.description} />
    </a>`,
  )
  .join('');
galleryEl.insertAdjacentHTML('beforeend', markup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
gallery.refresh();
