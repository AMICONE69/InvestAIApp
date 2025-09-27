/// script.js - genera consigli finti e si aggiorna ogni 60 secondi

const assets = [
    {name: "AAPL", type: "azione"},
    {name: "TSLA", type: "azione"},
    {name: "BTC", type: "crypto"},
    {name: "ETH", type: "crypto"}
];

function generateAdvice() {
    const adviceContainer = document.getElementById("advice");
    if (!adviceContainer) return;
    adviceContainer.innerHTML = ""; // pulisce consigli vecchi

    assets.forEach(asset => {
        const actions = ["Compra", "Vendi", "Mantieni"];
        const action = actions[Math.floor(Math.random() * actions.length)];
        const percent = Math.floor(Math.random() * 100) + 1;

        const p = document.createElement("p");
        p.textContent = `${asset.name} (${asset.type}): ${action} - ${percent}%`;
        adviceContainer.appendChild(p);
    });

    // mostra anche l'ora dell'ultimo aggiornamento
    const t = document.createElement("small");
    t.style.display = "block";
    t.style.marginTop = "8px";
    t.textContent = "Aggiornato: " + new Date().toLocaleTimeString();
    adviceContainer.appendChild(t);
}

// Aggiorna ogni 60 secondi (60000 ms).
setInterval(generateAdvice, 60000);

// Genera consigli subito all'apertura
window.onload = generateAdvice;

