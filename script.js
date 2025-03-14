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
}

document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll("img.lazy");
    lazyImages.forEach(img => {
        img.setAttribute("src", img.getAttribute("data-src"));
        img.removeAttribute("data-src");
    });
});
