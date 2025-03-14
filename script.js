function loadEpisode(element) {
    let embedUrl = element.getAttribute("data-url");
    let player = document.getElementById("episode-player");
    
    if (!embedUrl || !isValidUrl(embedUrl)) {
        alert("URL episode tidak valid.");
        return;
    }
    
    player.setAttribute("src", embedUrl);
}

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
}}

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
