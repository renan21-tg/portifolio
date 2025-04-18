const nome = document.querySelector('.typing')

function reiniciarAnimacao() {
  nome.classList.remove('typing');

  void nome.offsetWidth

  nome.classList.add('typing')
}

reiniciarAnimacao();

setInterval(reiniciarAnimacao, 5000)

function showImage(index, imageId) {
  const image = document.getElementById(imageId);
  const images = {
    'project-image-1': ['/images/Scrum1.png', '/images/Scrum2.png', '/images/Scrum3.png'],
    'project-image-2': ['/images/mind1.jpg', '/images/mind2.jpg', '/images/mind3.jpg'],
    'project-image-3': ['/images/trade1.png', '/images/trade2.png', '/images/trade3.png'],
  };

  if (image && images[imageId]) {
    image.src = images[imageId][index];

    // Atualiza os dots
    const parent = image.closest('.card-projeto1, .card-projeto2');
    if (parent) {
      const dots = parent.querySelectorAll('.dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }
  }
}
