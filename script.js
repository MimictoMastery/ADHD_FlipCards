function flipCard(card) {
    card.classList.toggle('flipped');
}

    function resetCards() {
        let cards = document.querySelectorAll('.flip-card');

        cards.forEach(card => {
            card.classList.remove('flipped');
        });                 
    }   