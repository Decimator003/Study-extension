// Create the overlay
const overlay = document.createElement('div');
overlay.className = 'study-overlay';

// Create the card content
overlay.innerHTML = `
  <div class="study-card">
    <img src="${chrome.runtime.getURL('images/Zoro.jpeg')}" alt="Study Reminder">
    <h1>Time to Study!</h1>
    <p>Stay focused and productive!</p>
  </div>
`;

// Add the overlay to the page
document.body.appendChild(overlay);

// Remove the overlay after 10 seconds
setTimeout(() => {
  overlay.remove();
}, 10000); // 10 seconds