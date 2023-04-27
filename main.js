if (window.File && window.FileReader && window.FileList){
    console.log('Todas las APIs soportadas');
} else {
    alert('La API de File no es soportada en este navegador');
}

function handleFileSelect() {
    const input = document.getElementById('video-input');
    const preview = document.getElementById('video-preview');
    const loadingMessage = document.getElementById('loading-message');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const stopBtn = document.getElementById('stop-btn');
    const volumeSlider = document.getElementById('volume-slider');
  
    const file = input.files[0];
    const url = URL.createObjectURL(file);
    
  
    setTimeout(() => { // retrasar la carga del video por 5 segundos
      preview.src = url;
      loadingMessage.style.display = 'block'; // mostrar mensaje de carga
      preview.addEventListener('canplay', () => {
        loadingMessage.style.display = 'none'; // ocultar mensaje de carga
        preview.play();
      });
    }, 3000);
  
    let isPlaying = false;
  
    input.addEventListener('change', () => {
      const file = input.files[0];
      const url = URL.createObjectURL(file);
      preview.src = url;
    });
  
    // Event listener para el botón del play/pause
    playPauseBtn.addEventListener('click', () => {
      if (isPlaying) {
        preview.pause();
        playPauseBtn.textContent = 'Play';
      } else {
        preview.play();
        playPauseBtn.textContent = 'Pause';
      }
      isPlaying = !isPlaying;
    });
  
    // Event listener para el botón de stop
    stopBtn.addEventListener('click', () => {
      preview.pause();
      preview.currentTime = 0;
      playPauseBtn.textContent = 'Play';
      isPlaying = false;
    });
  
    // Event listener para el rango del volumen
    volumeSlider.addEventListener('input', () => {
      preview.volume = volumeSlider.value;
    });
  }
  