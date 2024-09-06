function saveDeck() {
    const deckName = document.getElementById("deck-name").value.trim();
    if (!deckName) {
        alert("Please provide a deck name.");
        return;
    }

    const deckBrainstorm = Array.from(document.getElementById("brainstorm-field").children).map(card => card.textContent.trim());
    const deckFinal = Array.from(document.getElementById("final-deck-field").children).map(card => card.textContent.trim());

    // Log the deck data before saving
    console.log("Saving deck:", {
        name: deckName,
        brainstorm: deckBrainstorm,
        final: deckFinal
    });

    const newDeckRef = database.ref('decks/').push();
    newDeckRef.set({
        name: deckName,
        brainstorm: deckBrainstorm,
        final: deckFinal,
        timestamp: Date.now()
    }).then(() => {
        console.log("Deck saved successfully!");
        loadDecks(); // Reload decks after saving
    }).catch(error => {
        console.error("Error saving deck:", error);
    });
}
