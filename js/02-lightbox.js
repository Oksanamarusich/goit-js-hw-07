import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const container = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

container.addEventListener('click', handlerClick);

function createMarkup(arr){
  return arr.map(({preview, original, description}) =>`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`).join('')
}


function handlerClick(evt) {
    evt.preventDefault();
    if (evt.target === evt.currentTarget) {
       return;
    }
    console.log(evt.target);
}
