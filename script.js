document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".flip-card");
    var counter = document.getElementById("flipped-count");

    function updateCounter() {
        var flipped = document.querySelectorAll(".flip-card.flipped").length;
        if (counter) {
            counter.textContent = flipped;
        }
    }

    function flipCard(card) {
        card.classList.toggle("flipped");
        updateCounter();
    }

    cards.forEach(function (card) {
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");

        card.addEventListener("click", function () {
            flipCard(card);
        });

        card.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                flipCard(card);
            }
        });
    });

    var flipAllBtn = document.getElementById("flip-all");
    var resetBtn = document.getElementById("reset");

    if (flipAllBtn) {
        flipAllBtn.addEventListener("click", function () {
            cards.forEach(function (card) {
                card.classList.add("flipped");
            });
            updateCounter();
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener("click", function () {
            cards.forEach(function (card) {
                card.classList.remove("flipped");
            });
            updateCounter();
        });
    }
});