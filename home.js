document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("welcome-btn");
    const output = document.getElementById("message-output");

    const messages = [
        "Selam! Grab a cup of freshly roasted Yirgacheffe today.",
        "Coffee is in our blood—Buna dabo naw (Coffee is our bread)!",
        "Join us this afternoon for a traditional Jebena coffee ceremony."
    ];

    button.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * messages.length);
        output.textContent = messages[randomIndex];
    });
});