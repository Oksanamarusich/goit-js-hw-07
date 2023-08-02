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

function handlerClick(evt) {
    evt.preventDefault();
     if (evt.target.nodeName !== "IMG") return;

    const currentImg = evt.target.closest('.gallery__image');
    const source = currentImg.dataset.source;
     
  const instance = basicLightbox.create(`<img src="${source}" />`, {
    onShow: (instance) => {
      window.addEventListener('keydown', handlerPress);
      
    },
    onClose: (instance) => {
      window.addEventListener('keydown', handlerPress);
      
    }
    });
  instance.show();
  
    
}

function handlerPress(evt) {
    
  if (evt.code === 'Escape') {
    instance.close();
    } 
      
    
    
}