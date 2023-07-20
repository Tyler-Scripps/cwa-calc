document.getElementById("subBut").addEventListener("click", calculateSpeakers)

function calculateSpeakers() {
    let numDays = document.getElementById("numDays").value;
    let numSlots = document.getElementById("numTimes").value;
    let numPans = document.getElementById("numPanelsPerSlot").value;
    let numSpeaks = document.getElementById("numSpeakers").value;
    let numPansPerSpeak = document.getElementById("numPanelsPerSpeaker").value;
    let numPanels = numSlots * numPans * numDays;
    let numSpeakSeats = numPanels * numSpeaks;
    let totalSpeakers = numSpeakSeats / numPansPerSpeak;
    document.getElementById("pansOut").textContent = numPanels
    document.getElementById("speakerSeats").textContent = numSpeakSeats;
    document.getElementById("speakersOut").textContent = totalSpeakers;
}