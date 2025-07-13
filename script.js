
function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleString();
}
setInterval(updateClock, 1000);
updateClock();

function convertUSDCtoARBG() {
    const rate = 10; // Placeholder rate for demo
    const amount = document.getElementById('usdcAmount').value;
    document.getElementById('convertedAmount').textContent = amount + " USDC ≈ " + (amount * rate) + " ARBG (est.)";
}
