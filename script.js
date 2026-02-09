// Widget d'inspiration
const inspirations = [
    { text: "Les actions ne valent que par leurs intentions.", source: "Hadith" },
    { text: "Et quiconque place sa confiance en Allah, Il lui suffit.", source: "Coran" },
    { text: "La discipline est le pont entre vos buts et vos succès.", source: "Glow-Up" },
    { text: "Commencez là où vous êtes. Utilisez ce que vous avez.", source: "Motivation" }
];

function updateInspiration() {
    const textEl = document.getElementById('inspiration-text');
    const sourceEl = document.getElementById('inspiration-source');
    
    textEl.style.opacity = 0;
    
    setTimeout(() => {
        const random = inspirations[Math.floor(Math.random() * inspirations.length)];
        textEl.innerText = `"${random.text}"`;
        sourceEl.innerText = random.source;
        textEl.style.transition = "opacity 1s ease";
        textEl.style.opacity = 1;
    }, 800);
}

setInterval(updateInspiration, 10000);
window.onload = updateInspiration;

// Envoi WhatsApp
function sendToWhatsApp() {
    const phoneNumber = "22390348519";
    const name = document.getElementById('user-name').value;
    const message = document.getElementById('user-message').value;

    if (!name || !message) {
        alert("Oups ! Merci de remplir votre nom et votre message.");
        return;
    }

    // Effet confettis magiques
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#E0BBE4', '#FFD1DC', '#957dad']
    });

    setTimeout(() => {
        const url = `https://wa.me/${phoneNumber}?text=Bonjour Fatoumata, je suis ${name}. ${message}`;
        window.open(url, '_blank');
    }, 1200);
}