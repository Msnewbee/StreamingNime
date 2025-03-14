function loadEpisode(element) {
    // Ambil URL embed dari data-url
    const embedUrl = element.getAttribute("data-url");
    
    if (!embedUrl) {
        alert("URL episode tidak ditemukan!");
        return;
    }

    // Ganti isi #episode-player dengan iframe (embed MEGA)
    document.getElementById('episode-player').innerHTML =
        `<iframe width="640" height="360" frameborder="0" src="${embedUrl}" allowfullscreen></iframe>`;
}

document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll("img.lazy");
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
});

const fetch = require('node-fetch');

fetch('https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/dd226011-8241-41de-8811-8ac3bd35d8b9', {
    method: 'POST'
})
.then(res => res.json())
.then(data => console.log('Deploy triggered:', data))
.catch(err => console.error('Error triggering deploy:', err));

