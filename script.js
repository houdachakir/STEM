document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
        alert(`You voted for: ${btn.innerText}`);
    });
});