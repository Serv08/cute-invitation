const messages = [
    "Are you sure?",
    "Really sure?",
    "Think again 😢",
    "Please say yes 🥺",
    "I'm getting sad now...",
    "Just say YES! 💘"
  ];
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Change the text of the "No" button
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Exponentially increase the "Yes" button font size without a limit
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    const newSize = currentSize * 1.8; // exponential growth
    yesButton.style.fontSize = `${newSize}px`;
    }

function handleYesClick() {
    fetch("https://formspree.io/f/xnnpgllb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "She clicked YES! 💖",
        timestamp: new Date().toISOString()
      })
    }).then(() => {
      window.location.href = "yes.html";
    }).catch(error => {
      console.error("Failed to send email:", error);
      window.location.href = "yes.html"; // Still redirect
    });
  }
  
  