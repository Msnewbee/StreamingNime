function loadEpisode(element) {
    const embedUrl = element.getAttribute("data-url");

    // Cek apakah elemen memiliki data-url yang valid
    if (!embedUrl) {
        alert("URL episode tidak ditemukan!");
        return;
    }

    // Update konten video player dengan iframe embed dari MEGA
    document.getElementById('episode-player').innerHTML = 
        `<iframe width="640" height="360" frameborder="0" src="${embedUrl}" allowfullscreen></iframe>`
