// Fungsi untuk memuat embed video ke dalam kontainer
function loadEpisode(embedUrl) {
  // Buat iframe embed code dengan URL yang diberikan
  var iframe = '<iframe width="640" height="360" frameborder="0" src="' + embedUrl + '" allowfullscreen></iframe>';
  // Set konten dari kontainer dengan id "episode-player" menjadi iframe tersebut
  document.getElementById('episode-player').innerHTML = iframe;
}
