function loadEpisode(element) {
    const embedUrl = element.getAttribute("data-url");

    // Cek apakah elemen tersedia
    if (!embedUrl) {
        alert("URL episode tidak ditemukan!");
        return;
    }

    // Ganti konten video player
    document.getElementById('episode-player').innerHTML = 
        `<iframe width="640" height="360" frameborder="0" src="${embedUrl}" allowfullscreen></iframe>`;
}
