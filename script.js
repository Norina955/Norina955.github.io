// A céldátum június 15. délután 14:00 (a suli legvége)
const targetDate = new Date("2026-06-15T14:00:00").getTime();

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    if (difference > 0) {
        // Kiszámoljuk a napokat, órákat, perceket és másodperceket
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Értékek beírása a HTML kártyákba
        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    } else {
        // Amikor eljön június 15. 14:00, leáll a számláló és kiírja az üzenetet
        clearInterval(countdownInterval);
        document.getElementById('days').innerText = "00";
        document.getElementById('hours').innerText = "00";
        document.getElementById('minutes').innerText = "00";
        document.getElementById('seconds').innerText = "00";
        
        const messageBox = document.getElementById('expired-message');
        messageBox.innerText = "SZABADSÁG! Megkezdődött a nyári szünet! ☀️🏖️";
        messageBox.classList.remove('hidden');
    }
}, 1000);