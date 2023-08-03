import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
container.addEventListener('click', handlerClick);


function createMarkup(arr){
    return arr.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');
}

const instance = basicLightbox.create(`<img src="" />`, {
    onShow: (instance) => {
      document.addEventListener('keydown', handlerPress);
      
    },
    onClose: (instance) => {
      document.removeEventListener('keydown', handlerPress);
      
    }
    });

function handlerClick(evt) {
    evt.preventDefault();
    if (evt.target === evt.currentTarget) return;
    
    const currentImg = evt.target.closest('.gallery__image');
    const source = currentImg.dataset.source;
     
    
    instance.element().querySelector('img').src = source;
    instance.show();
    
    
}


 function handlerPress(evt) {
    console.log(evt);
   if (evt.code === "Escape") {
    instance.close();
  } 
}