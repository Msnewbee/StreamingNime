fetch("https://example.com/api/data", { mode: "no-cors" })
  .then(response => console.log(response))
  .catch(error => console.error("Fetch error:", error));

function loadEpisode(element) {
    let embedUrl = element.getAttribute("data-url");
    let player = document.getElementById("episode-player");
    
    if (!embedUrl || !isValidUrl(embedUrl)) {
        alert("URL episode tidak valid.");
        return;
    }
    
    player.setAttribute("src", embedUrl);
}

async function run() {
    try {
        const response = await fetch("URL_YANG_DIGUNAKAN");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Fetch error:", error);
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll("img.lazy");
    lazyImages.forEach(img => {
        img.setAttribute("src", img.getAttribute("data-src"));
        img.removeAttribute("data-src");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("error", function() {
            this.src = "images/default.jpg"; // Ganti dengan gambar default
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("iframe, video").forEach(media => {
        media.addEventListener("error", function() {
            this.outerHTML = "<p>Maaf, konten tidak dapat dimuat.</p>";
        });
    });
});

window.onerror = function(message, source, lineno, colno, error) {
    alert("Terjadi kesalahan: " + message);
};
