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
    
    if(textEl && sourceEl) {
        textEl.style.opacity = 0;
        
        setTimeout(() => {
            const random = inspirations[Math.floor(Math.random() * inspirations.length)];
            textEl.innerText = `"${random.text}"`;
            sourceEl.innerText = random.source;
            textEl.style.transition = "opacity 1s ease";
            textEl.style.opacity = 1;
        }, 800);
    }
}

setInterval(updateInspiration, 10000);
window.onload = updateInspiration;

// Envoi par E-mail
function sendEmail() {
    const emailDestination = "fatimsante04@gmail.com";
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

    // Préparation de l'email
    const subject = encodeURIComponent(`Contact Glow-Up de ${name}`);
    const body = encodeURIComponent(`Bonjour Fatoumata,\n\nJe suis ${name}.\n\nMessage :\n${message}`);

    setTimeout(() => {
        // Ouvre l'application de messagerie de l'utilisateur
        const mailtoUrl = `mailto:${emailDestination}?subject=${subject}&body=${body}`;
        window.location.href = mailtoUrl;
    }, 1200);
}