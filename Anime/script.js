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

async function run(model, input) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/b28649ce82eac859f113666c482934e9/ai/run/${model}`,
    {
      headers: { Authorization: "Bearer {API_TOKEN}" },
      method: "POST",
      body: JSON.stringify(input),
    }
  );
  const result = await response.json();
  return result;
}

run("@cf/meta/llama-3-8b-instruct", {
  messages: [
    {
      role: "system",
      content: "You are a friendly assistan that helps write stories",
    },
    {
      role: "user",
      content:
        "Write a short story about a llama that goes on a journey to find an orange cloud ",
    },
  ],
}).then((response) => {
  console.log(JSON.stringify(response));
});
