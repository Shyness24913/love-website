const button = document.getElementById("loveButton");
button.addEventListener("click", async () => {
    button.disabled = true;
    button.textContent = "Opening your surprise... 💗";
    try {
        const response = await fetch("/api/love-note");
        if (!response.ok) throw new Error("Request failed");
        const data = await response.json();
        document.getElementById("loveMessage").textContent = data.message;
        document.getElementById("sender").textContent = "— " + data.sender;
        document.getElementById("surprise").hidden = false;
        button.textContent = "Surprise opened! 💖";
    } catch (error) {
        button.textContent = "Try again 💌";
    } finally {
        button.disabled = false;
    }
});
