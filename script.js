/*perusinteraktio eventti painettaessa ja tapahtumankuuntelija */
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Lomake lähetetty!");
    form.reset();
});

/*DOM manipulointi & ehtolauseet*/

const changeTextButton = document.querySelector('#changeText');
const muokattavaTeksti = document.querySelector('#muokattavaTeksti');

const alkuperainenTeksti = muokattavaTeksti.innerHTML;

changeTextButton.addEventListener('click', function() {
    if (muokattavaTeksti.innerHTML === alkuperainenTeksti) {
        muokattavaTeksti.innerHTML = 'Teksti on päivitetty!';
    } else {
        muokattavaTeksti.innerHTML = alkuperainenTeksti;
    }
});

  /*Taulukko ja silmukat: Käytä taulukkoja ja 
  silmukoita datan käsittelyyn ja dynaamiseen HTML-sisällön
   päivittämiseen: */
   const lista = ['HTML', 'CSS', 'JavaScript'];
   for (let i = 0; i < lista.length; i++) {
    let li = document.createElement('li');
    li.textContent = lista[i];
    document.querySelector('#dynamicList').appendChild(li);
}

   /*CAROUSEL*/
   const images = document.querySelector('.carousel-images');
const totalImages = document.querySelectorAll('.carousel-images img').length;
let index = 0;
function updateCarousel() {
  const width = document.querySelector('.carousel img').clientWidth;
  images.style.transform = `translateX(${-index * width}px)`;
}
function nextImage() {
  index++;
  if (index >= totalImages) {
    index = 0;
  }
  updateCarousel();
}

document.querySelector('.prev').addEventListener('click', function() {
  index--;
  if (index < 0) {
    index = totalImages - 1;
  }
  updateCarousel();
});

document.querySelector('.next').addEventListener('click', function() {
  nextImage();
});

setInterval(nextImage, 3000);

/*FETCH */
const imgUrl = 'https://picsum.photos/1600/900';
async function fetchImage() {
  try {
    const response = await fetch(imgUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const imageUrl = response.url;
    document.getElementById('image-container').innerHTML = `<img src="${imageUrl}" alt="Random Image" class="img-responsive" />`;
  } catch (error) {
    console.error('Virhe:', error);
    document.getElementById('image-container').innerHTML = `<p>Virhe ladattaessa kuvaa: ${error.message}</p>`;
  }
}
fetchImage();
