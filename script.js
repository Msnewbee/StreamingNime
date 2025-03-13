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
