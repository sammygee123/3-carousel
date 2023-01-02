const carouselImages = document.querySelector('.carousel-images');
const carouselButtons = document.querySelectorAll('.carousel-button');
const numberOfImages = document.querySelectorAll('.carousel-images img').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 500;
      } else if(imageIndex === 1){
        translateX = (numberOfImages - 1) * -500
        imageIndex = numberOfImages
        
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 500;
        
      } else if (imageIndex === numberOfImages){
        translateX = 0
        imageIndex = 1
      }
    }
    
    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});
console.log(carouselButtons)
